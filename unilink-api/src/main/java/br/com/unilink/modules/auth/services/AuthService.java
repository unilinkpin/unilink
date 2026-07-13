package br.com.unilink.modules.auth.services;

import br.com.unilink.modules.auth.dto.LoginRequest;
import br.com.unilink.modules.auth.dto.LoginResponse;
import br.com.unilink.modules.auth.dto.RegisterRequest;
import br.com.unilink.modules.auth.models.Usuario;
import br.com.unilink.modules.auth.repositories.UsuarioRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UsuarioRepository usuarioRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
        this.usuarioRepository = usuarioRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public LoginResponse login(LoginRequest request) {
        Usuario usuario = usuarioRepository.findByEmail(request.email())
                .orElseThrow(() -> new RuntimeException("E-mail ou senha incorretos."));

        if (!passwordEncoder.matches(request.senha(), usuario.getSenhaHash())) {
            throw new RuntimeException("E-mail ou senha incorretos.");
        }

        return new LoginResponse(usuario.getId(), usuario.getNomeCompleto(), usuario.getEmail(), usuario.getTipoVinculo());
    }

    public String registrar(RegisterRequest request) {
        if (usuarioRepository.existsByEmail(request.email())) {
            throw new RuntimeException("Este e-mail já está em uso.");
        }

        // Validação básica do ENUM esperado por String
        if (!request.tipoVinculo().equals("Estudante Universitário") && !request.tipoVinculo().equals("Servidor / Professor")) {
            throw new RuntimeException("Tipo de vínculo inválido.");
        }

        Usuario novoUsuario = new Usuario();
        novoUsuario.setNomeCompleto(request.nomeCompleto());
        novoUsuario.setEmail(request.email());
        novoUsuario.setSenhaHash(passwordEncoder.encode(request.senha()));
        novoUsuario.setTipoVinculo(request.tipoVinculo());

        usuarioRepository.save(novoUsuario);
        return "Usuário criado com sucesso!";
    }
}