@echo off
chcp 65001 > nul
title Lisek wraca do domu - Angielski dla Zuzi

echo.
echo ========================================================
echo  🌲 LISEK WRACA DO DOMU - Edukacyjna Gra dla Zuzi 🦊
echo ========================================================
echo.
echo Uruchamianie lokalnego serwera gry...

:: Sprawdź czy dostępny jest standardowy node lub agy-node
where node >nul 2>nul
if %errorlevel% equ 0 (
    set NODE_CMD=node
) else (
    if exist "%APPDATA%\Antigravity\bin\agy-node.cmd" (
        set NODE_CMD="%APPDATA%\Antigravity\bin\agy-node.cmd"
    ) else (
        set NODE_CMD=node
    )
)

start "" http://localhost:3000
%NODE_CMD% server.js

pause
