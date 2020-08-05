import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <article className="teacher-item">
          <header>
            <img src="https://avatars0.githubusercontent.com/u/9698161?s=460&u=c2de3a852babda47a149ca785fb6ed7f54ca62f4&v=4" alt="Igor Fonseca"/>
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
            <button type="button"><img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em contato</button>
          </footer>
        </article>
      </main>
    </div>
  )
}

export default TeacherList;