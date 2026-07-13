package br.com.unilink.modules.discovery.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "eventos")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Evento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_instituicao") // Aponta exatamente para id_instituicao do SQL
    private Instituicao instituicao;

    @Column(nullable = false, length = 200)
    private String titulo;

    @Column(columnDefinition = "TEXT")
    private String descricao;

    @Column(name = "imagem_url", length = 255)
    private String imagemUrl;

    @Column(name = "data_inicio", nullable = false)
    private LocalDateTime dataInicio;

    @Column(name = "data_fim")
    private LocalDateTime dataFim;

    @Column(length = 200)
    private String local;

    @Column(length = 150)
    private String organizador;

    @Column(columnDefinition = "TEXT")
    private String premiacao;

    @Column(name = "created_at", updatable = false, insertable = false)
    private LocalDateTime createdAt;
}