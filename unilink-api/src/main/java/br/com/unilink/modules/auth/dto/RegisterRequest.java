package br.com.unilink.modules.auth.dto;

public record RegisterRequest(
    String nomeCompleto, 
    String email, 
    String senha, 
    String tipoVinculo
) {}