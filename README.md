# Passo a Passo para a Equipe (Primeira vez rodando o projeto):

- Banco: Rode docker-compose up -d na raiz principal.

- Backend: Abra a pasta unilink-api no VS Code. O próprio VS Code/Maven vai baixar as dependências do Java sozinho em poucos segundos (basta aguardar a barra de carregamento lá embaixo). Depois, é só rodar a aplicação.

- Frontend:

Entre na pasta cd unilink-web.

Crie uma cópia do arquivo .env.example e renomeie a cópia para .env.

Rode o comando npm install (Isso vai recriar a pasta node_modules no computador delas).

Rode npm run dev.


# # # # # IMPORTANTE # # # # # # #

 
## Regra do Banco de Dados (Flyway): 
Se alguém precisar criar uma tabela nova no Java, o arquivo SQL tem que começar com a data e hora exata (ex: V202607121830__criar_tabela_nova.sql). Se duas pessoas usarem o nome V2__, o banco trava.  

## Regra das Bibliotecas: 
Se precisar instalar uma biblioteca nova no React (npm install...) ou colocar uma dependência nova no Java (pom.xml), devem avisar no grupo. O package.json e o pom.xml são arquivos centrais e podem gerar pequenos conflitos se editados simultaneamente.

## Regra das Branches: 
Ninguém programa direto na branch main. Cada uma deve criar a sua própria feature branch (ex: git checkout -b dev1-login) e só depois juntar o código.