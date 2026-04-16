#!/bin/bash

# Script de setup para Blog Agent no macOS/Linux

echo ""
echo "===================================="
echo "     SETUP BLOG AGENT - macOS/Linux"
echo "===================================="
echo ""

# Verificar se Python está instalado
if ! command -v python3 &> /dev/null; then
    echo "[ERRO] Python3 não está instalado"
    echo "Instale com: brew install python3 (macOS) ou apt install python3 (Ubuntu)"
    exit 1
fi

echo "[OK] Python3 encontrado"
echo ""

# Navegar para pasta do agente
cd "$(dirname "$0")/blog-agent" || {
    echo "[ERRO] Pasta blog-agent não encontrada"
    exit 1
}

echo "[OK] Pasta blog-agent localizada"
echo ""

# Criar venv
echo "[INFO] Criando ambiente virtual..."
python3 -m venv venv

# Ativar venv
source venv/bin/activate

echo "[OK] Ambiente virtual ativado"
echo ""

# Instalar dependências
echo "[INFO] Instalando dependências..."
pip install --upgrade pip > /dev/null 2>&1
pip install -r requirements.txt

if [ $? -ne 0 ]; then
    echo "[ERRO] Erro ao instalar dependências"
    exit 1
fi

echo "[OK] Dependências instaladas com sucesso"
echo ""

# Criar .env
if [ ! -f ".env" ]; then
    echo "[INFO] Criando arquivo .env..."
    cp .env.example .env
    echo "[OK] Arquivo .env criado"
    echo ""
    echo "[IMPORTANTE] Edite o arquivo .env e adicione suas chaves:"
    echo "  - GROQ_API_KEY=sua_chave_do_groq"
    echo "  - TOKEN=seu_token_do_github"
    echo ""
else
    echo "[OK] Arquivo .env já existe"
fi

echo ""
echo "===================================="
echo "     SETUP COMPLETO!"
echo "===================================="
echo ""
echo "Próximos passos:"
echo "1. Edite blog-agent/.env com suas chaves"
echo "2. Execute: python test.py"
echo "3. Execute: python agent.py"
echo ""
echo "Para ativar o venv novamente:"
echo "  source blog-agent/venv/bin/activate"
echo ""
