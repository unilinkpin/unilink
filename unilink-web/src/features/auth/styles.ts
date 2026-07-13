import styled from 'styled-components';

// Paleta de Cores
export const colors = {
  primary: '#A7D631',
  black: '#000000',
  text: '#7F7F7F',
  inputBackground: '#F5F5F5',
  inputBorder: '#E0E0E0',
  border: '#F0F0F0',
  googleText: '#444444',
  placeholder: '#999999',
};

// Container principal que ocupa a tela inteira de ponta a ponta
export const LoginScreenContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  background-color: white;
  font-family: sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  /* Quando for celular ou tablet pequeno, muda de lado-a-lado para um em cima do outro */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Seção esquerda para logo e slogan
export const LogoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #fcfcfc;

  @media (max-width: 768px) {
    flex: none;
    padding: 30px 20px 10px 20px;
  }
`;

export const LogoImage = styled.img`
  width: 100%;
  max-width: 280px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    max-width: 180px; /* Logo menor em celulares */
  }
`;

export const SloganText = styled.p`
  font-size: 18px;
  color: ${colors.text};
  text-align: center;
  max-width: 400px;
  margin: 10px 0 0 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Seção direita para o formulário
export const FormSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
    align-items: flex-start; /* Evita que o teclado do celular cubra o botão */
  }
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
  text-align: left;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 12px 12px 12px 40px;
  font-size: 16px;
  background-color: ${colors.inputBackground};
  border: 1px solid ${colors.inputBorder};
  border-radius: 10px;
  color: ${colors.black};
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: ${colors.placeholder};
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  left: 12px;
  color: ${colors.placeholder};
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const PasswordToggle = styled.div`
  position: absolute;
  right: 12px;
  color: ${colors.placeholder};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: ${colors.primary};
  text-decoration: none;
  text-align: right;
  align-self: flex-end;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 14px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  width: 100%;
  margin-top: 10px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

export const DividerLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: ${colors.border};
`;

export const DividerText = styled.span`
  margin: 0 15px;
  color: ${colors.text};
  font-size: 14px;
`;

export const GoogleButton = styled.button`
  padding: 14px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  color: ${colors.googleText};
  border: 1px solid ${colors.border};
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #fafafa;
  }
`;

export const SignUpLink = styled.p`
  font-size: 15px;
  color: ${colors.text};
  margin-top: 25px;
  text-align: center;
`;

export const SignUpHighlight = styled.span`
  color: ${colors.primary};
  font-weight: bold;
  cursor: pointer;
`;