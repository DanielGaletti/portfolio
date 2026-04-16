import inspect
from langchain_groq import ChatGroq
print('ChatGroq class:', ChatGroq)
print('init signature:', inspect.signature(ChatGroq.__init__))
print('init source:\n')
print(inspect.getsource(ChatGroq.__init__))
