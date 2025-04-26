import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';
import { HeaderContainer, Title, WelcomeText, LogoutButton, RightContent } from "./Header.styled";

function Header() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  useEffect(() => {
    const savedData = localStorage.getItem("loginData");

    if (savedData) {
      const parsedData = JSON.parse(savedData);
      console.log(parsedData); 

      // Verifica se veio de login manual ou do Google
      const username = parsedData.username || parsedData.displayName || parsedData.name || "Usuário";

      setUserName(username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Title>Desafio<strong><span>Hub</span></strong></Title>

      <RightContent>
        <WelcomeText>Bem-vindo(a), <span>{userName}</span></WelcomeText>
        <LogoutButton onClick={handleLogout} title="Sair">
          <FiLogOut size={18}/>
        </LogoutButton>
      </RightContent>

    </HeaderContainer>
  )
}

export default Header