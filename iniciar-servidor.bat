@echo off
cd /d "%~dp0"
where node >nul 2>nul
if %errorlevel%==0 (
  node server.js
) else (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0servidor-local.ps1"
)
pause
