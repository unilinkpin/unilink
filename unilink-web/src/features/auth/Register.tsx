import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaIdBadge } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { authService } from './authService';
// @ts-ignore
import logoImg from '../../assets/logo.png';
import * as S from './styles'; // Reutilizando os mesmos estilos do Login

export default function Register() {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoVinculo, setTipoVinculo] = useState('Estudante Universitário');
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      // Chama o AuthService passando os dados exigidos pelo Backend
      const resultado = await authService.register(nomeCompleto, email, senha, tipoVinculo);
      setSuccess(resultado);
      
      // Redireciona para o login após 2 segundos
      setTimeout(() => {
        navigate('/auth/login');
      }, 2000);

    } catch (err: any) {
      const errorMessage = err.response?.data || 'Ocorreu um erro ao tentar cadastrar.';
      setError(errorMessage);
    }
  };

  return (
    <S.LoginScreenContainer>
      <S.LogoSection>
        <S.LogoImage src={logoImg} alt="Logo UniLink" />
        <S.SloganText>Junte-se à comunidade universitária</S.SloganText>
      </S.LogoSection>
      
      <S.FormSection>
        <S.LoginContainer>
          <S.LoginForm onSubmit={handleRegister}>
            
            {error && <div style={{ color: '#ff4d4d', textAlign: 'center' }}>{error}</div>}
            {success && <div style={{ color: '#A7D631', textAlign: 'center' }}>{success}</div>}

            <S.InputGroup>
              <S.Label htmlFor="nome">Nome Completo</S.Label>
              <S.InputWrapper>
                <S.InputIcon><FaUser /></S.InputIcon>
                <S.StyledInput 
                  id="nome"
                  type="text" 
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                />
              </S.InputWrapper>
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="email">E-mail</S.Label>
              <S.InputWrapper>
                <S.InputIcon><FaEnvelope /></S.InputIcon>
                <S.StyledInput 
                  id="email"
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </S.InputWrapper>
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="tipoVinculo">Tipo de Vínculo</S.Label>
              <S.InputWrapper>
                <S.InputIcon><FaIdBadge /></S.InputIcon>
                <S.StyledInput 
                  as="select"
                  id="tipoVinculo"
                  value={tipoVinculo}
                  onChange={(e) => setTipoVinculo(e.target.value)}
                  required
                >
                  <option value="Estudante Universitário">Estudante Universitário</option>
                  <option value="Servidor / Professor">Servidor / Professor</option>
                </S.StyledInput>
              </S.InputWrapper>
            </S.InputGroup>

            <S.InputGroup>
              <S.Label htmlFor="senha">Senha</S.Label>
              <S.InputWrapper>
                <S.InputIcon><FaLock /></S.InputIcon>
                <S.StyledInput 
                  id="senha"
                  type="password" 
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="Sua senha segura"
                  required
                />
              </S.InputWrapper>
            </S.InputGroup>

            <S.SubmitButton type="submit">Cadastrar</S.SubmitButton>
          </S.LoginForm>

          <S.SignUpLink>
            Já tem uma conta? <S.SignUpHighlight onClick={() => navigate('/auth/login')}>Entrar</S.SignUpHighlight>
          </S.SignUpLink>

        </S.LoginContainer>
      </S.FormSection>
    </S.LoginScreenContainer>
  );
}