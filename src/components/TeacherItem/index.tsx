import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/9698161?s=460&u=c2de3a852babda47a149ca785fb6ed7f54ca62f4&v=4" alt="Igor Fonseca" />
        <div>
          <strong>Igor Fonseca</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.000 alunos já passaram por uma de duas explosões.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 40,00</strong>
        </p>
        <button type="button"><img src={whatsappIcon} alt="WhatsApp" />
            Entrar em contato</button>
      </footer>
    </article>
  )
}

export default TeacherItem;