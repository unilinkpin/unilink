package br.com.unilink.modules.discovery.repositories;

import br.com.unilink.modules.discovery.models.Evento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EventoRepository extends JpaRepository<Evento, Long> {

    // Busca os primeiros 5 eventos ordenados pela data de início mais próxima
    List<Evento> findFirst5ByOrderByDataInicioAsc();

    // Query corrigida e validada: removemos a propriedade 'categoria' que não existe no modelo físico
    @Query("SELECT e FROM Evento e WHERE " +
           "(:busca IS NULL OR LOWER(e.titulo) LIKE LOWER(CONCAT('%', :busca, '%')) " +
           "OR LOWER(e.descricao) LIKE LOWER(CONCAT('%', :busca, '%')))")
    List<Evento> buscarComFiltros(@Param("busca") String busca);
}