import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

// Certifique-se de que a importação nomeada usa as chaves { }
import { authService } from './authService';

// @ts-ignore
import logoImg from '../../assets/logo.png'; 
import * as S from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null); 
  
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const userData = await authService.login(email, senha);
      localStorage.setItem('@UniLink:user', JSON.stringify(userData));
      navigate('/home'); 
    } catch (err: any) {
      const errorMessage = err.response?.data || 'Ocorreu um erro ao tentar entrar. Tente novamente.';
      setError(errorMessage);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.LoginScreenContainer>
      <S.LogoSection>
        <S.LogoImage src={logoImg} alt="Logo UniLink" />
        <S.SloganText>Conectando a comunidade universitária</S.SloganText>
      </S.LogoSection>

      <S.FormSection>
        <S.LoginContainer>
          <S.LoginForm onSubmit={handleLogin}>
            
            {error && <div style={{ color: '#ff4d4d', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}

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
                <S.PasswordToggle type="button" onClick={togglePasswordVisibility}>
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
            Não tem conta? <S.SignUpHighlight onClick={() => navigate('/auth/register')}>Cadastre-se</S.SignUpHighlight>
          </S.SignUpLink>
        </S.LoginContainer>
      </S.FormSection>
    </S.LoginScreenContainer>
  );
}