package br.com.unilink.modules.discovery.repositories;

import br.com.unilink.modules.discovery.models.Instituicao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstituicaoRepository extends JpaRepository<Instituicao, Long> {
}