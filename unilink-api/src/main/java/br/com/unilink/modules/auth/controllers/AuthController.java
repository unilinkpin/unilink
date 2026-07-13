package br.com.unilink.modules.auth.controllers;

import br.com.unilink.modules.auth.dto.LoginRequest;
import br.com.unilink.modules.auth.dto.LoginResponse;
import br.com.unilink.modules.auth.dto.RegisterRequest;
import br.com.unilink.modules.auth.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            LoginResponse response = authService.login(request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> registrar(@RequestBody RegisterRequest request) {
        try {
            String resultado = authService.registrar(request);
            return ResponseEntity.ok(resultado);
        } catch (RuntimeException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }
}