package br.com.unilink.modules.perfil.controllers;

import br.com.unilink.modules.perfil.dto.PerfilResponseDTO;
import br.com.unilink.modules.perfil.services.PerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/perfil")
@CrossOrigin(originPatterns = "*", allowCredentials = "true")
public class PerfilController {

    @Autowired
    private PerfilService perfilService;

    @GetMapping("/{id}")
    public ResponseEntity<PerfilResponseDTO> getPerfil(@PathVariable Long id) {
        try {
            PerfilResponseDTO perfil = perfilService.obterPerfilUsuario(id);
            return ResponseEntity.ok(perfil);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}