package br.com.unilink.modules.discovery.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "instituicoes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Instituicao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(length = 255)
    private String endereco;

    @Column(name = "mapa_url", length = 255)
    private String mapaUrl;

    @Column(name = "horario_funcionamento", length = 100)
    private String horarioFuncionamento;

    @Column(name = "tipo_acesso", length = 50)
    private String tipoAcesso;

    @Column(name = "created_at", updatable = false, insertable = false)
    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "instituicao", fetch = FetchType.LAZY)
    private java.util.List<Curso> cursos;
}