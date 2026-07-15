import React, { useEffect, useState } from 'react';
import Layout from '../../../core/Layout';
import { FaBars, FaCog, FaPen, FaShareSquare, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import * as S from './Perfil.styles';
import { perfilService, type PerfilData } from '../services/perfilApi';

export default function Perfil() {
  const [perfil, setPerfil] = useState<PerfilData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    perfilService.getPerfil(1)
      .then(data => {
        setPerfil(data);
        setLoading(false);
      })
      .catch(() => {
        setPerfil({
          id: 1,
          nome: "Mariana Costa",
          tipoVinculo: "Estudante",
          instituicaoNome: "UFAM Parintins",
          fotoPerfilUrl: "https://randomuser.me/api/portraits/women/44.jpg",
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
    return <Layout><div style={{ textAlign: 'center', marginTop: '50px' }}>Carregando Perfil...</div></Layout>;
  }

  return (
    <Layout>
      <S.Container>
        {/* Header visível apenas no mobile */}
        <S.MobileHeader>
          <S.IconButton><FaBars /></S.IconButton>
          <S.ProfileTitle>Perfil</S.ProfileTitle>
          <S.IconButton><FaCog /></S.IconButton>
        </S.MobileHeader>

        <S.AvatarWrapper>
          <S.AvatarImage src={perfil.fotoPerfilUrl} alt={perfil.nome} />
        </S.AvatarWrapper>

        <S.UserName>{perfil.nome}</S.UserName>
        <S.UserSub>
          {perfil.tipoVinculo} <S.Dot /> <FaMapMarkerAlt size={12} color="#888" /> {perfil.instituicaoNome}
        </S.UserSub>

        <S.StatsContainer>
          <S.StatItem>
            <strong>{perfil.pontos}</strong>
            <span>Pontos</span>
          </S.StatItem>
          <S.StatItem>
            <strong>{perfil.totalEventos}</strong>
            <span>Eventos</span>
          </S.StatItem>
          <S.StatItem>
            <strong>{perfil.totalProjetos}</strong>
            <span>Projetos</span>
          </S.StatItem>
        </S.StatsContainer>

        <S.ActionsRow>
          <S.EditButton>
            Editar perfil <FaPen size={12} />
          </S.EditButton>
          <S.ShareButton>
            <FaShareSquare size={16} />
          </S.ShareButton>
        </S.ActionsRow>

        <S.TabsRow>
          <S.TabItem active>Projetos</S.TabItem>
          <S.TabItem>Eventos</S.TabItem>
          <S.TabItem>Conquistas</S.TabItem>
        </S.TabsRow>

        <S.GridContainer>
          {perfil.projetosMockados.map((proj) => (
            <S.ProjectCard key={proj.id} themeType={proj.tema}>
              <span style={{ textAlign: proj.tema === 'light' ? 'center' : 'left' }}>
                {proj.nome}
              </span>
            </S.ProjectCard>
          ))}
          <S.AddCard>
            <FaPlus />
          </S.AddCard>
        </S.GridContainer>

      </S.Container>
    </Layout>
  );
}