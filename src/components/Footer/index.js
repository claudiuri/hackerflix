import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/img/Logo-50.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/claudiuri/hackerflix">
          <img src={logo} alt="Logo" />
        {/* <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" /> */}
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
