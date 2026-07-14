package br.com.unilink.modules.discovery.controllers;

import br.com.unilink.modules.discovery.models.Evento;
import br.com.unilink.modules.discovery.models.Instituicao;
import br.com.unilink.modules.discovery.services.DiscoveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/discovery")
@CrossOrigin(originPatterns = "*", allowCredentials = "true") // Permite chamadas do seu Frontend React
public class DiscoveryController {

    @Autowired
    private DiscoveryService discoveryService;

    // GET /api/discovery/home/instituicoes -> Lista campi para navegação
    @GetMapping("/home/instituicoes")
    public ResponseEntity<List<Instituicao>> getHomeInstituicoes() {
        List<Instituicao> instituicoes = discoveryService.listarInstituicoes();
        return ResponseEntity.ok(instituicoes);
    }

    // GET /api/discovery/home/eventos -> Próximos eventos em destaque
    @GetMapping("/home/eventos")
    public ResponseEntity<List<Evento>> getHomeEventos() {
        List<Evento> eventos = discoveryService.listarProximosEventos();
        return ResponseEntity.ok(eventos);
    }

    // GET /api/discovery/explorar -> Feed com parâmetros de busca e filtro de categoria
    @GetMapping("/explorar")
    public ResponseEntity<List<Evento>> explorar(
            @RequestParam(value = "busca", required = false) String busca) {
        
        List<Evento> posts = discoveryService.explorarPosts(busca);
        return ResponseEntity.ok(posts);
    }

    // GET /api/discovery/instituicoes/{id}
    @GetMapping("/instituicoes/{id}")
    public ResponseEntity<br.com.unilink.modules.discovery.dto.CampusResponseDTO> getDetalhesCampus(@PathVariable Long id) {
        return discoveryService.listarInstituicoes().stream()
                .filter(inst -> inst.getId().equals(id))
                .findFirst()
                .map(inst -> ResponseEntity.ok(new br.com.unilink.modules.discovery.dto.CampusResponseDTO(inst)))
                .orElse(ResponseEntity.notFound().build());
    }
}