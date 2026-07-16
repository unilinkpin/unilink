import React, { useEffect, useState } from 'react';
import Layout from '../../../core/Layout';
import { FaPen, FaShareSquare, FaMapMarkerAlt, FaPlus, FaUser } from 'react-icons/fa';
import * as S from './Perfil.styles';
import { perfilService, type PerfilData } from '../services/perfilApi';

type TabOpcoes = 'Projetos' | 'Eventos' | 'Conquistas';

export default function Perfil() {
  const [perfil, setPerfil] = useState<PerfilData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabOpcoes>('Projetos');

  useEffect(() => {
    const usuarioLogadoRaw = localStorage.getItem('@UniLink:user');
    let usuarioLogado: any = null;

    if (usuarioLogadoRaw) {
      try {
        usuarioLogado = JSON.parse(usuarioLogadoRaw);
      } catch (e) {
        console.error(e);
      }
    }

    perfilService.getPerfil(usuarioLogado?.id || 1)
      .then(data => {
        if (usuarioLogado) {
          setPerfil({
            ...data,
            nome: usuarioLogado.nomeCompleto || usuarioLogado.nome || data.nome,
            tipoVinculo: usuarioLogado.tipoVinculo || data.tipoVinculo,
          });
        } else {
          setPerfil(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setPerfil({
          id: usuarioLogado?.id || 1,
          nome: usuarioLogado?.nomeCompleto || usuarioLogado?.nome || "Mariana Costa",
          tipoVinculo: usuarioLogado?.tipoVinculo || "Estudante",
          instituicaoNome: "UFAM Parintins",
          fotoPerfilUrl: usuarioLogado?.fotoPerfilUrl || "",
          pontos: 450,
          totalEventos: 12,
          totalProjetos: 3,
          projetosMockados: [
            { id: 1, nome: "Projeto Bioeconomia", tema: "dark" },
            { id: 2, nome: "App Mapeamento", tema: "light" },
            { id: 3, nome: "Leitura nas Escolas", tema: "green" }
          ]
        });
        setLoading(false);
      });
  }, []);

  if (loading || !perfil) {
    return <Layout><div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Inter' }}>Carregando Perfil...</div></Layout>;
  }

  const imagensProjetos = [
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=400"
  ];

  return (
    <Layout>
      <S.Container>
        <S.CoverBanner />
        
        <S.ProfileHeader>
          <S.AvatarWrapper>
            {perfil.fotoPerfilUrl ? (
              <img src={perfil.fotoPerfilUrl} alt={perfil.nome} />
            ) : (
              <S.DefaultAvatarPlaceholder>
                <FaUser />
              </S.DefaultAvatarPlaceholder>
            )}
          </S.AvatarWrapper>
          
          <S.ActionsRow>
            <S.ActionButton primary>
              Editar perfil <FaPen size={12} />
            </S.ActionButton>
            <S.ActionButton>
              <FaShareSquare size={16} /> Compartilhar
            </S.ActionButton>
          </S.ActionsRow>
        </S.ProfileHeader>

        <S.InfoSection>
          <S.UserName>{perfil.nome}</S.UserName>
          <S.UserSub>
            {perfil.tipoVinculo} <FaMapMarkerAlt size={14} color="#A7D631" /> {perfil.instituicaoNome}
          </S.UserSub>
        </S.InfoSection>

        <S.StatsContainer>
          <S.StatItem onClick={() => setActiveTab('Conquistas')} style={{ cursor: 'pointer' }}>
            <strong>{perfil.pontos}</strong>
            <span>Pontos</span>
          </S.StatItem>
          <S.StatItem onClick={() => setActiveTab('Eventos')} style={{ cursor: 'pointer' }}>
            <strong>{perfil.totalEventos}</strong>
            <span>Eventos</span>
          </S.StatItem>
          <S.StatItem onClick={() => setActiveTab('Projetos')} style={{ cursor: 'pointer' }}>
            <strong>{perfil.totalProjetos}</strong>
            <span>Projetos</span>
          </S.StatItem>
        </S.StatsContainer>

        <S.TabsRow>
          <S.TabItem active={activeTab === 'Projetos'} onClick={() => setActiveTab('Projetos')}>Projetos</S.TabItem>
          <S.TabItem active={activeTab === 'Eventos'} onClick={() => setActiveTab('Eventos')}>Eventos</S.TabItem>
          <S.TabItem active={activeTab === 'Conquistas'} onClick={() => setActiveTab('Conquistas')}>Conquistas</S.TabItem>
        </S.TabsRow>

        {activeTab === 'Projetos' && (
          <S.GridContainer>
            {perfil.projetosMockados.map((proj, index) => (
              <S.ProjectCard key={proj.id} themeType={proj.tema} imagem={imagensProjetos[index % imagensProjetos.length]}>
                <S.ProjectCardOverlay />
                <span style={{ position: 'relative', zIndex: 2, textAlign: proj.tema === 'light' ? 'center' : 'left' }}>
                  {proj.nome}
                </span>
              </S.ProjectCard>
            ))}
            <S.AddCard>
              <FaPlus /> Adicionar Novo
            </S.AddCard>
          </S.GridContainer>
        )}

        {activeTab === 'Eventos' && (
          <S.TabContentEmpty>
            Nenhum evento inscrito no momento. Explore a aba de Campus ou Início para se inscrever!
          </S.TabContentEmpty>
        )}

        {activeTab === 'Conquistas' && (
          <S.TabContentEmpty>
            Você possui {perfil.pontos} pontos acumulados. Continue participando de atividades para liberar novas conquistas!
          </S.TabContentEmpty>
        )}
      </S.Container>
    </Layout>
  );
}