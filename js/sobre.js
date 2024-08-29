// src/sobre.js

import React from 'react';
import './style.css';
import './menu.css';
import './rodape.css'; // Este arquivo será criado

const Sobre = () => {
  return (
    <div>
      <header id="cabecalho">
        <nav>
          <div id="menuhorizontal">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/eventos">EVENTOS</a></li>
              <li><a href="/contato">CONTATO</a></li>
              <li><a href="/cursos">CURSOS</a></li>
              <li id="about"><a href="/entrar">ENTRAR</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <h1>Sobre</h1>
        <p>
          {/* Conteúdo original da página "Sobre" pode ser colocado aqui */}
          O Instituto Federal de Educação, Ciência e Tecnologia de São Paulo...
        </p>
      </main>

      <footer>
        <div id="rodape">
          {/* Conteúdo do rodapé */}
          IFSP - Câmpus Pirituba, Av. Mutinga, 951 - Jardim Santo Elias...
        </div>
      </footer>
    </div>
  );
};

export default Sobre;
