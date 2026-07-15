package br.com.unilink.modules.perfil.services;

import br.com.unilink.modules.auth.models.Usuario;
import br.com.unilink.modules.auth.repositories.UsuarioRepository;
import br.com.unilink.modules.discovery.models.Instituicao;
import br.com.unilink.modules.discovery.repositories.InstituicaoRepository;
import br.com.unilink.modules.perfil.dto.PerfilResponseDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PerfilService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    public PerfilResponseDTO obterPerfilUsuario(Long idUsuario) {
        Usuario usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));

        String instituicaoNome = "UFAM Parintins"; 
        if (usuario.getIdInstituicao() != null) {
            instituicaoNome = instituicaoRepository.findById(usuario.getIdInstituicao())
                    .map(Instituicao::getNome)
                    .orElse("Instituição Desconhecida");
        }

        List<Map<String, Object>> projetos = List.of(
            Map.of("id", 1, "nome", "Projeto Bioeconomia", "tema", "dark"),
            Map.of("id", 2, "nome", "App Mapeamento", "tema", "light"),
            Map.of("id", 3, "nome", "Leitura nas Escolas", "tema", "green")
        );

        return new PerfilResponseDTO(
                usuario.getId(),
                usuario.getNomeCompleto(),
                usuario.getTipoVinculo().contains("Estudante") ? "Estudante" : "Professor",
                instituicaoNome,
                usuario.getFotoPerfilUrl(),
                450, 
                12,  
                3,  
                projetos
        );
    }
}