package br.com.unilink.modules.perfil.dto;

import java.util.List;
import java.util.Map;

public record PerfilResponseDTO(
    Long id,
    String nome,
    String tipoVinculo,
    String instituicaoNome,
    String fotoPerfilUrl,
    int pontos,
    int totalEventos,
    int totalProjetos,
    List<Map<String, Object>> projetosMockados
) {}