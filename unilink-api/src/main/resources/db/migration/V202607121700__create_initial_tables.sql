-- ==========================================
-- 1. ENUMS (TIPOS PERSONALIZADOS)
-- ==========================================
CREATE TYPE enum_tipo_vinculo AS ENUM ('Estudante Universitário', 'Servidor / Professor'); 
CREATE TYPE enum_status_inscricao AS ENUM ('Inscrito', 'Cancelado'); 
CREATE TYPE enum_categoria_forum AS ENUM ('Dúvidas acadêmicas', 'Eventos', 'Projetos'); 
CREATE TYPE enum_tipo_notificacao AS ENUM ('Resposta Fórum', 'Lembrete Evento', 'Curtida', 'Sistema'); 

-- ==========================================
-- 2. TABELAS DE INSTITUIÇÕES E CURSOS
-- ==========================================
CREATE TABLE Instituicoes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    descricao TEXT,
    endereco VARCHAR(255),
    mapa_url VARCHAR(255),
    horario_funcionamento VARCHAR(100), 
    tipo_acesso VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Cursos (
    id SERIAL PRIMARY KEY,
    id_instituicao INT NOT NULL REFERENCES Instituicoes(id) ON DELETE CASCADE,
    nome VARCHAR(150) NOT NULL,
    turno VARCHAR(50), 
    duracao_anos INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==========================================
-- 3. TABELAS DE USUÁRIOS E PERFIS
-- ==========================================
CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    id_instituicao INT REFERENCES Instituicoes(id) ON DELETE SET NULL,
    nome_completo VARCHAR(150) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL, 
    senha_hash VARCHAR(255) NOT NULL,
    foto_perfil_url VARCHAR(255),
    tipo_vinculo enum_tipo_vinculo NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Perfis_Estudantes (
    id_usuario INT PRIMARY KEY REFERENCES Usuarios(id) ON DELETE CASCADE,
    id_curso INT REFERENCES Cursos(id) ON DELETE SET NULL,
    numero_matricula VARCHAR(50) UNIQUE NOT NULL,
    comprovante_vinculo_url VARCHAR(255) 
);

CREATE TABLE Perfis_Professores (
    id_usuario INT PRIMARY KEY REFERENCES Usuarios(id) ON DELETE CASCADE,
    cargo_funcao VARCHAR(100), 
    area_atuacao_curso VARCHAR(150),
    lattes_url VARCHAR(255)
);

CREATE TABLE Areas_Interesse (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE Usuarios_Interesses (
    id_usuario INT REFERENCES Usuarios(id) ON DELETE CASCADE,
    id_area_interesse INT REFERENCES Areas_Interesse(id) ON DELETE CASCADE,
    PRIMARY KEY (id_usuario, id_area_interesse)
);

-- ==========================================
-- 4. EVENTOS E INSCRIÇÕES DIRETAS (SEM TAXAS)
-- ==========================================
CREATE TABLE Eventos (
    id SERIAL PRIMARY KEY,
    id_instituicao INT REFERENCES Instituicoes(id) ON DELETE SET NULL,
    titulo VARCHAR(200) NOT NULL, 
    descricao TEXT,
    imagem_url VARCHAR(255),
    data_inicio TIMESTAMP NOT NULL,
    data_fim TIMESTAMP,
    local VARCHAR(200), 
    organizador VARCHAR(150),
    premiacao TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Inscricoes (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES Usuarios(id) ON DELETE CASCADE,
    id_evento INT NOT NULL REFERENCES Eventos(id) ON DELETE CASCADE,
    status enum_status_inscricao NOT NULL DEFAULT 'Inscrito',
    data_inscricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id_usuario, id_evento)
);

-- ==========================================
-- 5. FÓRUM E INTERAÇÕES (MÓDULO SOCIAL)
-- ==========================================
CREATE TABLE Forum_Topicos (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES Usuarios(id) ON DELETE CASCADE,
    categoria enum_categoria_forum NOT NULL,
    titulo VARCHAR(200) NOT NULL,
    corpo_postagem TEXT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Forum_Comentarios (
    id SERIAL PRIMARY KEY,
    id_topico INT NOT NULL REFERENCES Forum_Topicos(id) ON DELETE CASCADE,
    id_usuario INT NOT NULL REFERENCES Usuarios(id) ON DELETE CASCADE,
    conteudo TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Favoritos (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES Usuarios(id) ON DELETE CASCADE,
    tipo_entidade VARCHAR(50) NOT NULL,
    id_entidade INT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id_usuario, tipo_entidade, id_entidade)
);

-- ==========================================
-- 6. NOTIFICAÇÕES
-- ==========================================
CREATE TABLE Notificacoes (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES Usuarios(id) ON DELETE CASCADE,
    tipo enum_tipo_notificacao NOT NULL,
    mensagem TEXT NOT NULL,
    lida BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);