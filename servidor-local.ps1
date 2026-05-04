$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = if ($env:PORT) { [int]$env:PORT } else { 8080 }

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css' = 'text/css; charset=utf-8'
  '.js' = 'text/javascript; charset=utf-8'
  '.svg' = 'image/svg+xml'
  '.png' = 'image/png'
  '.jpg' = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.ico' = 'image/x-icon'
}

$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse('127.0.0.1'), $port)
$listener.Start()

Write-Host "TEMPEST SPORT listo en http://localhost:$port"
Write-Host 'Presiona Ctrl+C para detener el servidor.'

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $reader = [System.IO.StreamReader]::new($stream, [System.Text.Encoding]::ASCII, $false, 1024, $true)
    $requestLine = $reader.ReadLine()

    if (-not $requestLine) {
      $client.Close()
      continue
    }

    $parts = $requestLine.Split(' ')
    $requestPath = if ($parts.Length -gt 1) { $parts[1].Split('?')[0] } else { '/' }
    if ($requestPath -eq '/') { $requestPath = '/index.html' }

    $relativePath = [System.Uri]::UnescapeDataString($requestPath.TrimStart('/')).Replace('/', [System.IO.Path]::DirectorySeparatorChar)
    $filePath = [System.IO.Path]::GetFullPath((Join-Path $root $relativePath))
    $insideRoot = $filePath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)

    if (-not $insideRoot -or -not (Test-Path -LiteralPath $filePath -PathType Leaf)) {
      $body = [System.Text.Encoding]::UTF8.GetBytes('Not found')
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
      $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($headerBytes, 0, $headerBytes.Length)
      $stream.Write($body, 0, $body.Length)
      continue
    }

    $bodyBytes = [System.IO.File]::ReadAllBytes($filePath)
    $ext = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()
    $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { 'application/octet-stream' }
    $responseHeader = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bodyBytes.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
    $responseHeaderBytes = [System.Text.Encoding]::ASCII.GetBytes($responseHeader)
    $stream.Write($responseHeaderBytes, 0, $responseHeaderBytes.Length)
    $stream.Write($bodyBytes, 0, $bodyBytes.Length)
  } catch {
    Write-Warning $_.Exception.Message
  } finally {
    $client.Close()
  }
}
