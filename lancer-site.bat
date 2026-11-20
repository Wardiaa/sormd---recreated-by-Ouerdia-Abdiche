@echo off
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
    echo Node.js n'est pas installe sur cet ordinateur.
    echo Installez Node.js 20 ou superieur depuis https://nodejs.org puis relancez ce fichier.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Installation des dependances...
    call npm install
    if errorlevel 1 (
        echo L'installation a echoue.
        pause
        exit /b 1
    )
)

echo Demarrage du site sur http://localhost:5173 ...
start "" cmd /c "timeout /t 4 /nobreak >nul & start http://localhost:5173"
call npm run dev
