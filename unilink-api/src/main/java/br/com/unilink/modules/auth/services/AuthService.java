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

    // LÓGICA DE REGISTRO
    public String registrar(RegisterRequest request) {
        // 1. Verifica se o e-mail já está em uso
        if (usuarioRepository.existsByEmail(request.email())) {
            throw new RuntimeException("Este e-mail já está em uso.");
        }

        // 2. Validação do tipo de vínculo
        if (!request.tipoVinculo().equals("Estudante Universitário") && 
            !request.tipoVinculo().equals("Servidor / Professor")) {
            throw new RuntimeException("Tipo de vínculo inválido.");
        }

        // 3. Criação do novo usuário
        Usuario novoUsuario = new Usuario();
        novoUsuario.setNomeCompleto(request.nomeCompleto());
        novoUsuario.setEmail(request.email());
        
        // CRÍTICO: Criptografa a senha antes de salvar no banco!
        novoUsuario.setSenhaHash(passwordEncoder.encode(request.senha()));
        novoUsuario.setTipoVinculo(request.tipoVinculo());

        // 4. Salva no banco de dados
        usuarioRepository.save(novoUsuario);
        
        return "Usuário criado com sucesso!";
    }
}