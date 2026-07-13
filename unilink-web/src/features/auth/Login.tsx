import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

// Importe a logo corretamente
import logoImg from '../../assets/logo.png'; 

// Importando todo o CSS separado
import * as S from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Tentativa de login:', { email, senha });
    alert('Formulário enviado! Verifique o console.');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.LoginScreenContainer>
      {/* Seção Esquerda: Logo e Slogan */}
      <S.LogoSection>
        <S.LogoImage src={logoImg} alt="Logo UniLink" />
        <S.SloganText>Conectando a comunidade universitária</S.SloganText>
      </S.LogoSection>

      {/* Seção Direita: Formulário */}
      <S.FormSection>
        <S.LoginContainer>
          <S.LoginForm onSubmit={handleLogin}>
            
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
              <S.Label htmlFor="senha">Senha</S.Label>
              <S.InputWrapper>
                <S.InputIcon><FaLock /></S.InputIcon>
                <S.StyledInput 
                  id="senha"
                  type={showPassword ? 'text' : 'password'} 
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  placeholder="........."
                  required
                />
                <S.PasswordToggle onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </S.PasswordToggle>
              </S.InputWrapper>
              <S.ForgotPasswordLink>Esqueceu a senha?</S.ForgotPasswordLink>
            </S.InputGroup>

            <S.SubmitButton type="submit">Entrar</S.SubmitButton>
          </S.LoginForm>

          <S.Divider>
            <S.DividerLine />
            <S.DividerText>ou</S.DividerText>
            <S.DividerLine />
          </S.Divider>

          <S.GoogleButton type="button">
            <FcGoogle fontSize="24px" /> Continuar com Google
          </S.GoogleButton>

          <S.SignUpLink>
            Não tem conta? <S.SignUpHighlight>Cadastre-se</S.SignUpHighlight>
          </S.SignUpLink>
        </S.LoginContainer>
      </S.FormSection>
    </S.LoginScreenContainer>
  );
}