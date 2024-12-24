@echo off
echo ===================================
echo    Iniciando Servidor - Maxx Sun
echo ===================================

:: Navega para a pasta do projeto (caso o bat seja executado de outro lugar)
cd %~dp0

:: Limpa a tela
cls

:: Inicia o servidor
echo Iniciando o servidor de desenvolvimento...
echo.
npm run dev

:: Mantém a janela aberta em caso de erro
pause 