package br.com.unilink.modules.discovery.dto;

import br.com.unilink.modules.discovery.models.Instituicao;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public record CampusResponseDTO(
    Long id,
    String nome,
    String descricao,
    String horarioFuncionamento,
    String tipoAcesso,
    List<CursoDTO> cursos,
    List<Map<String, String>> projetosMockados,
    List<Map<String, String>> eventosMockados
) {
    public CampusResponseDTO(Instituicao instituicao) {
        this(
            instituicao.getId(),
            instituicao.getNome(),
            instituicao.getDescricao(),
            instituicao.getHorarioFuncionamento(),
            instituicao.getTipoAcesso(),
            instituicao.getCursos() != null ? 
                instituicao.getCursos().stream().map(CursoDTO::new).collect(Collectors.toList()) 
                : List.of(),
            
            // Mockando Projetos para entregar a tela hoje
            List.of(
                Map.of("nome", "Laboratório de Robótica", "tag", "TECNOLOGIA", "descricao", "Desenvolvimento de soluções em automação")
            ),
            
            // Mockando Eventos
            List.of(
                Map.of("nome", "Semana de Tecnologia", "tag", "EM BREVE", "descricao", "Palestras, minicursos e networking...")
            )
        );
    }
}

record CursoDTO(Long id, String nome, String turno, Integer duracaoAnos) {
    public CursoDTO(br.com.unilink.modules.discovery.models.Curso curso) {
        this(curso.getId(), curso.getNome(), curso.getTurno(), curso.getDuracaoAnos());
    }
}