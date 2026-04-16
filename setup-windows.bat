@echo off
REM Script de setup para Blog Agent no Windows

echo.
echo ====================================
echo     SETUP BLOG AGENT - WINDOWS
echo ====================================
echo.

REM Verificar se Python está instalado
python --version > nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Python não está instalado ou não está no PATH
    echo Baixe em: https://www.python.org
    pause
    exit /b 1
)

echo [OK] Python encontrado
echo.

REM Navegar para pasta do agente
cd /d "%~dp0blog-agent" || (
    echo [ERRO] Pasta blog-agent não encontrada
    pause
    exit /b 1
)

echo [OK] Pasta blog-agent localizada
echo.

REM Criar venv
echo [INFO] Criando ambiente virtual...
python -m venv venv

REM Ativar venv
call venv\Scripts\activate.bat

echo [OK] Ambiente virtual ativado
echo.

REM Instalar dependências
echo [INFO] Instalando dependências (isso pode levar alguns minutos)...
pip install --upgrade pip > nul 2>&1
pip install -r requirements.txt

if %errorlevel% neq 0 (
    echo [ERRO] Erro ao instalar dependências
    pause
    exit /b 1
)

echo [OK] Dependências instaladas com sucesso
echo.

REM Criar .env
if not exist ".env" (
    echo [INFO] Criando arquivo .env...
    copy .env.example .env > nul
    echo [OK] Arquivo .env criado
    echo.
    echo [IMPORTANTE] Edite o arquivo .env e adicione suas chaves:
    echo   - GROQ_API_KEY=sua_chave_do_groq
    echo   - TOKEN=seu_token_do_github
    echo.
    pause
) else (
    echo [OK] Arquivo .env já existe
)

echo.
echo ====================================
echo     SETUP COMPLETO!
echo ====================================
echo.
echo Próximos passos:
echo 1. Edite blog-agent\.env com suas chaves
echo 2. Execute: python test.py
echo 3. Execute: python agent.py
echo.
echo Para ativar o venv novamente:
echo   .\blog-agent\venv\Scripts\activate.bat
echo.
pause
