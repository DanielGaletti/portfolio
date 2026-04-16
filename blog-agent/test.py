#!/usr/bin/env python3
"""
Script de teste para o Blog Agent
Verifica se as dependências estão instaladas corretamente
"""

import sys
from pathlib import Path

def test_imports():
    """Testa se todos os imports funcionam"""
    print("🧪 Testando imports...")
    
    try:
        import arxiv
        print("✅ arxiv")
    except ImportError as e:
        print(f"❌ arxiv: {e}")
        return False
    
    try:
        from langchain_groq import ChatGroq
        print("✅ langchain_groq")
    except ImportError as e:
        print(f"❌ langchain_groq: {e}")
        return False
    
    try:
        from git import Repo
        print("✅ GitPython")
    except ImportError as e:
        print(f"❌ GitPython: {e}")
        return False
    
    try:
        import dotenv
        print("✅ python-dotenv")
    except ImportError as e:
        print(f"❌ python-dotenv: {e}")
        return False
    
    print("\n✅ Todos os imports funcionam!\n")
    return True

def test_env_variables():
    """Testa se as variáveis de ambiente estão configuradas"""
    print("🔐 Testando variáveis de ambiente...")
    
    from dotenv import load_dotenv
    import os
    
    load_dotenv()
    
    groq_key = os.getenv("GROQ_API_KEY")
    token = os.getenv("TOKEN")
    
    if groq_key and groq_key.startswith("gsk_"):
        print(f"✅ GROQ_API_KEY configurada ({groq_key[:20]}...)")
    else:
        print("❌ GROQ_API_KEY não configurada ou inválida")
        return False
    
    if token:
        print(f"✅ TOKEN configurada ({token[:20]}...)")
    else:
        print("⚠️  TOKEN não configurada (opcional para testes locais)")
    
    print()
    return True

def test_groq_connection():
    """Testa conexão com Groq"""
    print("🚀 Testando conexão com Groq...")
    
    import os
    from dotenv import load_dotenv
    from langchain_groq import ChatGroq
    from langchain.schema import HumanMessage
    
    load_dotenv()
    
    api_key = os.getenv("GROQ_API_KEY")
    
    if not api_key:
        print("❌ GROQ_API_KEY não configurada")
        return False
    
    try:
        llm = ChatGroq(
            api_key=api_key,
            model="llama-3.1-70b-versatile",
            temperature=0.3
        )
        
        response = llm.invoke([HumanMessage(content="Responda com uma palavra: teste")])
        
        print(f"✅ Conexão com Groq funcionando")
        print(f"   Resposta: {response.content[:50]}...")
        print()
        return True
        
    except Exception as e:
        print(f"❌ Erro ao conectar com Groq: {e}")
        print()
        return False

def test_arxiv():
    """Testa busca no arXiv"""
    print("📚 Testando busca no arXiv...")
    
    try:
        import arxiv
        
        client = arxiv.Client()
        search = arxiv.Search(
            query="ai machine learning",
            max_results=1,
            sort_by=arxiv.SortCriterion.SubmittedDate,
        )
        
        articles = list(client.results(search))
        
        if articles:
            article = articles[0]
            print(f"✅ Busca no arXiv funcionando")
            print(f"   Título: {article.title[:50]}...")
            print(f"   ID: {article.entry_id.split('/abs/')[-1]}")
        else:
            print("⚠️  Nenhum artigo encontrado")
        
        print()
        return True
        
    except Exception as e:
        print(f"❌ Erro ao buscar no arXiv: {e}")
        print()
        return False

def main():
    print("=" * 60)
    print("🔬 TESTE DO BLOG AGENT")
    print("=" * 60)
    print()
    
    results = []
    
    # Teste 1: Imports
    results.append(("Imports", test_imports()))
    
    # Teste 2: Variáveis de ambiente
    results.append(("Variáveis de ambiente", test_env_variables()))
    
    # Teste 3: arXiv
    results.append(("arXiv", test_arxiv()))
    
    # Teste 4: Groq (apenas se as variáveis estiverem configuradas)
    try:
        from dotenv import load_dotenv
        import os
        load_dotenv()
        if os.getenv("GROQ_API_KEY"):
            results.append(("Groq", test_groq_connection()))
    except:
        pass
    
    # Resumo
    print("=" * 60)
    print("📊 RESUMO DOS TESTES")
    print("=" * 60)
    
    for test_name, result in results:
        status = "✅" if result else "❌"
        print(f"{status} {test_name}")
    
    all_passed = all(r for _, r in results)
    
    print()
    if all_passed:
        print("🎉 Todos os testes passaram! O Blog Agent está pronto para usar.")
    else:
        print("⚠️  Alguns testes falharam. Verifique a configuração.")
    
    return 0 if all_passed else 1

if __name__ == "__main__":
    sys.exit(main())
