# Módulo Auth (Escopo Dev 1) - Login
Como o front deve enviar os dados e o que o back deve devolver ao logar.

// POST /api/auth/login
// O que o Front-end envia (Request):
{
  "email": "mariana.costa@ufam.edu.br",
  "senha": "senha_segura_123"
}

// O que o Back-end devolve (Response):
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5c...",
  "usuario": {
    "id": 1,
    "nome": "Mariana Costa",
    "tipoVinculo": "Estudante Universitário",
    "instituicao": "UFAM Parintins"
  }
}


# 2. Módulo Discovery (Escopo Dev 2) - Feed de Eventos
Como os dados devem chegar para montar o feed da tela EXPLORAR.

JSON
// GET /api/eventos
// O que o Back-end devolve (Response - Lista):
[
  {
    "id": 15,
    "titulo": "4ª Maratona de Programação IFAM",
    "tipo": "COMPETIÇÃO",
    "data": "25 Nov",
    "local": "IFAM - Campus Parintins",
    "imagemUrl": "https://link-da-imagem.com/maratona.jpg"
  }
]


# Módulo Interaction (Escopo Dev 3) - Realizar Inscrição
Como o clique no botão "Inscrever-se" se comunica com o back.

JSON
// POST /api/inscricoes
// O que o Front-end envia (Request):
{
  "idEvento": 15
}

// O que o Back-end devolve (Response):
{
  "status": "Inscrito",
  "mensagem": "Inscrição realizada com sucesso!",
  "dataInscricao": "2026-07-12T17:00:00"
}


