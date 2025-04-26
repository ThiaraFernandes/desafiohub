import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import programmingImg from '../../assets/programming.svg';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import {
  PageContainer,
  LeftSection,
  RightSection,
  Title,
  Subtitle,
  ImageContainer,
  Form,
  Button,
} from './Login.styled';

function Login() {
  const navigate = useNavigate();
  const [erro, setErro] = useState('');

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Usuário logado com Google:', user);

      // Salva os dados do usuário no localStorage
      localStorage.setItem('loginData', JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }));

      navigate('/home');
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
      setErro('Erro ao fazer login com Google.');
    }
  };

  // Limpa o localStorage ao carregar a página
  useEffect(() => {
    localStorage.removeItem('loginData');
  }, []);

  return (
    <PageContainer>
      <LeftSection>
        <Title>
          Bem-vindo(a) ao <strong>Desafio<span>Hub</span></strong>
        </Title>

        <Subtitle>
          <p>Este é o meu espaço de evolução no DevClub.</p>
          <p>Essa plataforma reúne tudo que venho aprendendo com prática.</p>
          <p><span>Explorar, aprender e codar!</span></p>
        </Subtitle>

        <ImageContainer>
          <img src={programmingImg} alt="Ilustração de programação" />
        </ImageContainer>
      </LeftSection>

      <RightSection>
        <h2>Entrar</h2>
        <Form>
          {erro && <div>{erro}</div>}
          <Button type="button" onClick={handleGoogleLogin}>
            Entrar com Google
          </Button>
        </Form>
      </RightSection>
    </PageContainer>
  );
}

export default Login;
