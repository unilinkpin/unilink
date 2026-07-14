-- ==========================================
-- SEED DE TESTE: INSTITUIÇÕES
-- ==========================================
INSERT INTO Instituicoes (nome, descricao, endereco, horario_funcionamento, tipo_acesso)
VALUES 
('UFAM - Campus Parintins', 'Instituto de Ciências Sociais, Educação e Zootecnia.', 'Estrada do Odovaldo, Parintins - AM', '07:00 às 22:00', 'Público'),
('IFAM - Campus Parintins', 'Instituto de Ciências e Tecnologia do Amazonas.', 'Av. Mário Andreazza, Parintins - AM', '07:00 às 22:00', 'Público'),
('UEA - Centro de Estudos', 'Cursos de tecnologia, saúde e licenciaturas.', 'Rua Força Policial, Parintins - AM', '07:00 às 22:00', 'Público');

-- ==========================================
-- SEED DE TESTE: EVENTOS (Dados das telas Explorar e Home)
-- ==========================================
INSERT INTO Eventos (id_instituicao, titulo, descricao, data_inicio, local, organizador)
VALUES 
(2, '4ª Maratona de Programação IFAM', 'Desafie suas habilidades lógicas e de programação na 4ª Maratona da IFAM...', '2026-11-25 08:00:00', 'IFAM - Campus Parintins', 'Coordenação de Computação'),
(1, 'Novo Laboratório de Ciências é inaugurado no ICSEZ', 'Com novos equipamentos, o laboratório atenderá os cursos de biologia e química...', '2026-07-13 09:30:00', 'UFAM - Campus Parintins', 'Direção ICSEZ'),
(1, 'Carona Solidária Universitária', 'Alunos de computação desenvolvem sistema para facilitar a mobilidade de...', '2026-07-13 12:00:00', 'UFAM / UEA', 'Centro Acadêmico');