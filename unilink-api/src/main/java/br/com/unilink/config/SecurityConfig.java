package br.com.unilink.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity // ISSO É A MÁGICA: Permite usar @PreAuthorize nos controllers
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // Desativa proteção CSRF, pois usaremos tokens JWT (Stateless)
            .csrf(csrf -> csrf.disable())
            
            // Configura a sessão para não guardar estado (padrão para APIs REST)
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            
            // Aqui deixamos as rotas livres por padrão na configuração central, 
            // pois o controle real será feito nas anotações de cada Controller pelas Devs!
            .authorizeHttpRequests(auth -> auth
                .anyRequest().permitAll() 
            );

        return http.build();
    }
}