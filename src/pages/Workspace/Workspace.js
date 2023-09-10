import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Workspace = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <>
    <h1>Workspace</h1>
    <Link to="/home">&nbsp;Home</Link>
    <button onClick={() => [signout(), navigate("/")]}>Sair</button>
    </>
    
  );
};

export default Workspace;