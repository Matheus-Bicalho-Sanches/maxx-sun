@echo off
echo ===================================
echo    Commit Automatico - Maxx Sun
echo ===================================

:: Adiciona todas as alterações
git add .

:: Faz o commit com a mensagem
git commit -m "chore: add react-icons dependency"

:: Faz o push para o repositório remoto
echo.
echo Enviando para o repositorio remoto...
git push

echo.
echo ===================================
echo    Commit realizado com sucesso!
echo ===================================
pause