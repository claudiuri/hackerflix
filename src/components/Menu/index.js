import React from 'react';
import logo from '../../assets/img/Logo.png';
import './Menu.css'
import Button from '../Button';
// import ButtonLink from '../ButtonLink';

function Menu(){
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="CodeFlix"/>
      </a>

      <Button as="a" className="ButtonLink" href="/" >
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;