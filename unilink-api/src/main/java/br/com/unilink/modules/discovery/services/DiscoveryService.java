package br.com.unilink.modules.discovery.services;

import br.com.unilink.modules.discovery.models.Evento;
import br.com.unilink.modules.discovery.models.Instituicao;
import br.com.unilink.modules.discovery.repositories.EventoRepository;
import br.com.unilink.modules.discovery.repositories.InstituicaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DiscoveryService {

    @Autowired
    private InstituicaoRepository instituicaoRepository;

    @Autowired
    private EventoRepository eventoRepository;

    public List<Instituicao> listarInstituicoes() {
        return instituicaoRepository.findAll();
    }

    // Corrigido para ordenar por dataInicio, batendo com a entidade e a tabela física
    public List<Evento> listarProximosEventos() {
        return eventoRepository.findFirst5ByOrderByDataInicioAsc();
    }

    // Corrigido para aceitar apenas o parâmetro de busca por texto
    public List<Evento> explorarPosts(String busca) {
        return eventoRepository.buscarComFiltros(busca);
    }
}