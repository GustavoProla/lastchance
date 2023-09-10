import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <h1>HOME</h1>
    <button onClick={() => [signout(), navigate("/")]}>Sair</button>
    </>
    
  );
};

export default Home;