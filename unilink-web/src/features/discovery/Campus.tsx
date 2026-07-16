import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '../../core/api';
import { FaMapMarkerAlt, FaClock, FaInfoCircle, FaLocationArrow, FaChevronRight } from 'react-icons/fa';
import Layout from '../../core/Layout';
import imgMapaUfam from '../../assets/mapa_ufam.png';
import imgCurso1 from '../../assets/curso1.png';
import imgCurso2 from '../../assets/curso2.png';
import imgProjeto1 from '../../assets/projeto1.png';
import imgProjeto2 from '../../assets/projeto2.png';
import imgEvento1 from '../../assets/evento1.png';
import imgEvento2 from '../../assets/evento2.png';

interface Curso { id: number; nome: string; turno: string; duracaoAnos: number; }
interface CampusData { id: number; nome: string; descricao: string; horarioFuncionamento: string; tipoAcesso: string; cursos: Curso[]; projetosMockados: any[]; eventosMockados: any[]; }

export default function Campus() {
  const [campus, setCampus] = useState<CampusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandirCursos, setExpandirCursos] = useState(false);
  const [expandirProjetos, setExpandirProjetos] = useState(false);
  const [expandirEventos, setExpandirEventos] = useState(false);

  useEffect(() => {
    api.get('/discovery/instituicoes/1')
      .then(response => { setCampus(response.data); setLoading(false); })
      .catch(error => { console.error("Erro ao buscar dados do campus:", error); setLoading(false); });
  }, []);

  if (loading) return <Layout><LoadingScreen>Carregando Campus...</LoadingScreen></Layout>;
  if (!campus) return <Layout><LoadingScreen>Erro ao carregar os dados.</LoadingScreen></Layout>;

  const listaCursos = campus.cursos && campus.cursos.length > 0 ? campus.cursos : [
    { id: 101, nome: "Jornalismo", turno: "Matutino", duracaoAnos: 4 },
    { id: 102, nome: "Zootecnia", turno: "Integral", duracaoAnos: 5 },
    { id: 103, nome: "Pedagogia", turno: "Noturno", duracaoAnos: 4 },
    { id: 104, nome: "Administração", turno: "Noturno", duracaoAnos: 4 }
  ];

  const listaProjetos = campus.projetosMockados && campus.projetosMockados.length > 0 ? [
    ...campus.projetosMockados,
    { nome: "Horta Comunitária", tag: "SUSTENTABILIDADE", descricao: "Cultivo de alimentos orgânicos." },
    { nome: "Clube do Livro", tag: "CULTURA", descricao: "Rodas de leitura regionais." },
    { nome: "Iniciação Científica", tag: "CIÊNCIA", descricao: "Pesquisas avançadas acadêmicas." }
  ] : [
    { nome: "Laboratório de Robótica", tag: "TECNOLOGIA", descricao: "Automação e robôs universitários." },
    { nome: "Horta Comunitária", tag: "SUSTENTABILIDADE", descricao: "Alimentos orgânicos universitários." }
  ];

  const listaEventos = campus.eventosMockados && campus.eventosMockados.length > 0 ? [
    ...campus.eventosMockados,
    { nome: "Festival Folclórico Universitário", tag: "HOJE", descricao: "Apresentações culturais e culinária típica." },
    { nome: "Mostra de Extensão", tag: "EM BREVE", descricao: "Exposição de projetos de impacto social." },
    { nome: "Palestra de Saúde Mental", tag: "19 JUL", descricao: "Roda de conversa com psicólogos." }
  ] : [
    { nome: "Semana de Tecnologia", tag: "EM BREVE", descricao: "Palestras e networking universitário." },
    { nome: "Festival Folclórico", tag: "HOJE", descricao: "Cultura e culinária típica universitária." }
  ];

  const imagensCursos = [imgCurso1, imgCurso2];
  const imagensProjetos = [imgProjeto1, imgProjeto2];
  const imagensEventos = [imgEvento1, imgEvento2];

  return (
    <Layout>
      <HeaderWrapper>
        <HeaderLeftRow>
          <HeaderTitle>Campus</HeaderTitle>
        </HeaderLeftRow>
      </HeaderWrapper>
      <Container>
        <MapContainer imagem={imgMapaUfam}>
          <MapOverlay />
          <MapBadge><FaMapMarkerAlt /> {campus.nome}</MapBadge>
        </MapContainer>
        <Content>
          <WelcomeTag>BEM-VINDO!</WelcomeTag>
          <Title>{campus.nome}</Title>
          <Description>{campus.descricao} Descubra o que acontece no campus.</Description>
          <ActionRow onClick={() => window.open('https://maps.google.com/?q=UFAM+Parintins', '_blank')}>
            <ActionIcon><FaLocationArrow /></ActionIcon>
            <ActionTexts>
              <strong>Como chegar</strong>
              <span>Traçar rota real no mapa · 3.2 km</span>
            </ActionTexts>
            <ActionArrow><FaChevronRight /></ActionArrow>
          </ActionRow>
          <StatusGrid>
            <StatusCard>
              <IconWrapper><FaClock /></IconWrapper>
              <div>
                <strong>Aberto</strong>
                <span>{campus.horarioFuncionamento}</span>
              </div>
            </StatusCard>
            <StatusCard>
              <IconWrapper><FaInfoCircle /></IconWrapper>
              <div>
                <strong>Público</strong>
                <span>Acesso Liberado</span>
              </div>
            </StatusCard>
          </StatusGrid>
          <SectionHeader>
            <SectionTitle>Cursos Oferecidos</SectionTitle>
            <SeeAll onClick={() => setExpandirCursos(!expandirCursos)}>{expandirCursos ? "Mostrar menos" : "Ver todos"}</SeeAll>
          </SectionHeader>
          <ResponsiveList expandido={expandirCursos}>
            {listaCursos.map((curso, index) => (
              <Card key={curso.id}>
                <CardTag>BACHARELADO</CardTag>
                <CardImage src={imagensCursos[index % imagensCursos.length]} alt={curso.nome} />
                <CardContent>
                  <CardTitle>{curso.nome}</CardTitle>
                  <CardSubtitle>{curso.turno} · Duração de {curso.duracaoAnos} anos</CardSubtitle>
                </CardContent>
                <CardButtonDark onClick={() => alert(`Navegando para o curso: ${curso.nome}`)}>VER CURSO</CardButtonDark>
              </Card>
            ))}
          </ResponsiveList>
          <SectionHeader>
            <SectionTitle>Projetos do Campus</SectionTitle>
            <SeeAll onClick={() => setExpandirProjetos(!expandirProjetos)}>{expandirProjetos ? "Mostrar menos" : "Ver todos"}</SeeAll>
          </SectionHeader>
          <ResponsiveList expandido={expandirProjetos}>
            {listaProjetos.map((proj, index) => (
              <Card key={index}>
                <CardTag cor="#A7D631">{proj.tag}</CardTag>
                <CardImage src={imagensProjetos[index % imagensProjetos.length]} alt={proj.nome} />
                <CardContent>
                  <CardTitle>{proj.nome}</CardTitle>
                  <CardSubtitle>{proj.descricao}</CardSubtitle>
                </CardContent>
                <CardButtonLight onClick={() => alert(`Conhecendo o projeto: ${proj.nome}`)}>CONHECER</CardButtonLight>
              </Card>
            ))}
          </ResponsiveList>
          <SectionHeader>
            <SectionTitle>Eventos da Universidade</SectionTitle>
            <SeeAll onClick={() => setExpandirEventos(!expandirEventos)}>{expandirEventos ? "Mostrar menos" : "Ver todos"}</SeeAll>
          </SectionHeader>
          <ResponsiveList expandido={expandirEventos}>
            {listaEventos.map((evento, index) => (
              <Card key={index}>
                <CardTag cor="#A7D631">{evento.tag || 'EM BREVE'}</CardTag>
                <CardImage src={imagensEventos[index % imagensEventos.length]} alt={evento.nome} />
                <CardContent>
                  <CardTitle>{evento.nome}</CardTitle>
                  <CardSubtitle>{evento.descricao}</CardSubtitle>
                </CardContent>
                <CardButtonDark onClick={() => alert(`Inscrição no evento: ${evento.nome}`)}>PARTICIPAR</CardButtonDark>
              </Card>
            ))}
          </ResponsiveList>
        </Content>
      </Container>
    </Layout>
  );
}

const HeaderWrapper = styled.header`
  width: 100%; display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; gap: 24px;
  @media (max-width: 1024px) { flex-direction: column; align-items: flex-start; margin-bottom: 24px; }
`;
const HeaderLeftRow = styled.div`
  display: flex; align-items: center; gap: 32px; flex: 1; width: 100%;
  @media (max-width: 600px) { flex-direction: column; align-items: flex-start; gap: 16px; }
`;
const HeaderTitle = styled.h1` font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 700; color: #111; margin: 0; `;
const Container = styled.div`
  font-family: 'Inter', sans-serif; background: #fff; width: 100%; max-width: 100%; min-height: 100vh; padding-bottom: 60px; overflow-x: hidden; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.05);
`;
const LoadingScreen = styled.div` display: flex; justify-content: center; align-items: center; height: 100vh; font-weight: bold; color: #7f7f7f; `;
const MapContainer = styled.div<{ imagem: string }>` height: 260px; background-image: url(${props => props.imagem}); background-size: cover; background-position: center; display: flex; justify-content: center; align-items: center; position: relative; border-top-left-radius: 20px; border-top-right-radius: 20px; `;
const MapOverlay = styled.div` position: absolute; inset: 0; background: rgba(0,0,0,0.15); border-top-left-radius: 20px; border-top-right-radius: 20px; `;
const MapBadge = styled.div` position: relative; z-index: 2; background: #111; color: #fff; padding: 10px 20px; border-radius: 30px; font-weight: bold; font-size: 13px; display: flex; align-items: center; gap: 8px; border: 3px solid #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.15); `;
const Content = styled.div` padding: 30px 40px; margin-top: -30px; background: #fff; border-radius: 30px 30px 0 0; position: relative; z-index: 3; @media (max-width: 768px) { padding: 30px 20px; } `;
const WelcomeTag = styled.span` background: #A7D631; font-weight: bold; padding: 6px 14px; border-radius: 20px; font-size: 10px; display: inline-block; margin-bottom: 15px; color: #111; `;
const Title = styled.h1` margin: 0 0 10px 0; font-size: 32px; font-weight: 800; color: #111; `;
const Description = styled.p` color: #7f7f7f; font-size: 15px; margin-bottom: 25px; line-height: 1.6; max-width: 600px; `;
const ActionRow = styled.div` display: flex; align-items: center; background: #fff; border: 1px solid #f0f0f0; border-radius: 20px; padding: 15px; margin-bottom: 30px; cursor: pointer; transition: 0.2s; width: fit-content; padding-right: 25px; &:hover { background: #fafafa; transform: translateY(-2px); box-shadow: 0 4px 10px rgba(0,0,0,0.02); } @media (max-width: 500px) { width: auto; padding-right: 15px; } `;
const ActionIcon = styled.div` width: 45px; height: 45px; border-radius: 50%; background: #A7D631; display: flex; justify-content: center; align-items: center; font-size: 16px; color: #111; margin-right: 15px; `;
const ActionTexts = styled.div` flex: 1; margin-right: 20px; strong { display: block; font-size: 15px; margin-bottom: 4px; color: #111; } span { font-size: 12px; color: #999; } `;
const ActionArrow = styled.div` width: 35px; height: 35px; border-radius: 50%; background: #111; color: #fff; display: flex; justify-content: center; align-items: center; font-size: 11px; `;
const StatusGrid = styled.div` display: flex; gap: 15px; margin-bottom: 40px; max-width: 600px; @media (max-width: 500px) { flex-direction: column; } `;
const StatusCard = styled.div` flex: 1; background: #F8FBEF; border-radius: 20px; padding: 18px; display: flex; align-items: center; gap: 15px; border: 1px solid #f2f7e4; strong { display: block; font-size: 15px; margin-bottom: 4px; color: #111; } span { font-size: 12px; color: #7f7f7f; } `;
const IconWrapper = styled.div` background: #fff; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 16px; color: #111; box-shadow: 0 2px 8px rgba(167,214,49,0.15); `;
const SectionHeader = styled.div` display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; padding: 0 5px; `;
const SectionTitle = styled.h3` font-size: 20px; margin: 0; font-weight: 800; color: #111; `;
const SeeAll = styled.span` font-size: 13px; color: #7f7f7f; cursor: pointer; font-weight: 600; transition: 0.2s; &:hover { color: #A7D631; text-decoration: underline; } `;
const ResponsiveList = styled.div<{ expandido: boolean }>` display: flex; gap: 15px; overflow-x: ${props => props.expandido ? 'visible' : 'auto'}; flex-wrap: ${props => props.expandido ? 'wrap' : 'nowrap'}; padding-bottom: 15px; margin-bottom: 40px; &::-webkit-scrollbar { display: none; } @media (min-width: 650px) { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); overflow-x: visible; flex-wrap: wrap; } `;
const Card = styled.div` min-width: 240px; background: #F8FBEF; border-radius: 20px; padding: 15px; flex-shrink: 0; position: relative; border: 1px solid #f2f7e4; box-sizing: border-box; transition: 0.2s; display: flex; flex-direction: column; height: 380px; @media (min-width: 650px) { min-width: 0; } &:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.04); } `;
const CardTag = styled.span<{ cor?: string }>` position: absolute; top: 25px; left: 25px; background: ${props => props.cor || '#A7D631'}; font-size: 10px; font-weight: bold; padding: 5px 10px; border-radius: 8px; color: #111; z-index: 2; `;
const CardImage = styled.img` width: 100%; height: 130px; object-fit: cover; border-radius: 14px; margin-bottom: 12px; position: relative; z-index: 1; `;
const CardContent = styled.div` display: flex; flex-direction: column; flex-grow: 1; margin-bottom: 15px; `;
const CardTitle = styled.h4` margin: 0 0 6px 0; font-size: 16px; font-weight: 800; color: #111; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; min-height: 38px; `;
const CardSubtitle = styled.p` font-size: 12px; color: #7f7f7f; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; `;
const CardButtonDark = styled.button` width: 100%; background: #111; color: #fff; padding: 12px; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; transition: 0.2s; font-size: 12px; &:hover { background: #333; transform: translateY(-1px); } `;
const CardButtonLight = styled.button` width: 100%; background: #edf5d3; color: #111; padding: 12px; border: none; border-radius: 12px; font-weight: bold; cursor: pointer; transition: 0.2s; font-size: 12px; &:hover { background: #e2f0b6; transform: translateY(-1px); } `;