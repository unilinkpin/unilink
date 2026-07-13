-- Remove a restrição do tipo ENUM e converte para texto normal (VARCHAR)
ALTER TABLE usuarios ALTER COLUMN tipo_vinculo TYPE VARCHAR(255) USING tipo_vinculo::VARCHAR;

-- Apaga o tipo ENUM que não será mais usado no banco
DROP TYPE IF EXISTS enum_tipo_vinculo;