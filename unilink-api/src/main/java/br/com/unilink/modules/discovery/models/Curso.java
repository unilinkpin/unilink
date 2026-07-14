package br.com.unilink.modules.discovery.models;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "cursos")
@Data
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_instituicao", nullable = false)
    private Instituicao instituicao;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column(length = 50)
    private String turno;

    @Column(name = "duracao_anos")
    private Integer duracaoAnos;

    @Column(name = "created_at", insertable = false, updatable = false)
    private LocalDateTime createdAt;
}