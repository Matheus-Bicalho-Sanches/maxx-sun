@echo off
echo ===================================
echo    Commit Automatico - Maxx Sun
echo ===================================

:: Adiciona todas as alterações
git add .

:: Mostra o status atual
echo.
echo Status atual do repositorio:
git status

:: Solicita mensagem do commit
echo.
set /p commit_message="Digite a mensagem do commit: "

:: Faz o commit com a mensagem
git commit -m "%commit_message%"

:: Faz o push para o repositório remoto
echo.
echo Enviando para o repositorio remoto...
git push

echo.
echo ===================================
echo    Commit realizado com sucesso!
echo ===================================
pause 