@echo off
echo ===================================
echo    Commit Automatico - Maxx Sun
echo ===================================

:: Prompt for commit message
set /p commit_msg=Digite a mensagem do commit: 

:: Adiciona todas as alterações
git add .

:: Faz o commit com a mensagem
git commit -m "%commit_msg%"

:: Faz o push para o repositório remoto
echo.
echo Enviando para o repositorio remoto...
git push

echo.
echo ===================================
echo    Commit realizado com sucesso!
echo ===================================
pause