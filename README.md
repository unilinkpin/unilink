# UniLink

O UniLink é uma plataforma web totalmente responsiva desenvolvida para conectar a comunidade universitária de Parintins (UFAM, UEA e IFAM). O sistema centraliza a divulgação de notícias, a organização e inscrição em eventos, o gerenciamento de projetos acadêmicos e a interação social por meio de fóruns de discussão.

---

## 🚀 Funcionalidades Principais

* **Página Inicial (Home):** Painel centralizado com novidades, destaques de eventos recentes e navegação rápida pelos campi integrados.
* **Explorar:** Feed dinâmico para buscar e filtrar de forma rápida competições, eventos e projetos em andamento na região.
* **Perfil Completo:** Espaço do usuário exibindo sua pontuação de engajamento, conquistas, eventos participados e uma vitrine de projetos vinculados.

---

## 🛠️ Tecnologias Utilizadas

### Backend
* **Java 17**
* **Spring Boot** (Spring Data JPA, Spring Security)
* **Flyway Migration** (Gerenciamento evolutivo do banco de dados)
* **PostgreSQL**

### Frontend
* **React**
* **TypeScript**
* **Styled Components** (Estilização isolada e responsiva)
* **React Icons**

### Infraestrutura
* **Docker** (Containerização do ambiente de desenvolvimento e banco de dados)

---

## ⚙️ Arquitetura do Projeto

A estrutura de pastas do frontend foi construída seguindo o padrão baseado em **Features**:

```text
src/
├── assets/          # Imagens, logos e mídias locais
├── components/      # Componentes globais reutilizáveis
├── core/            # Configurações base (API Axios, Layout global)
└── features/        # Módulos isolados da aplicação
    ├── auth/        # Login e Cadastro de Usuários
    ├── campus/      # Detalhes das Instituições
    ├── discovery/   # Home, Explorar e Filtros
    ├── interaction/ # Fórum, Favoritos e Comentários
    └── user/        # Perfil do Usuário e Configurações
