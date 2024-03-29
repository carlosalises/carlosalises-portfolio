import React from 'react'
import Section from './Section'
import style from '../style/Projects.module.css'
import {projects} from '../info/info'

export default function Projects() {

  return (
    <Section title="PROYECTOS">
      <ul className={style.projects}>
        {projects.map(({name, description, information, page}, index) => {
          return (
            <li key={index}>
              <article className={style.project}>
                <header>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  {
                    page !== '' && (
                      <a className={style.link} href={page}>GO TO PAGE</a>
                    )
                  }
                </header>
                <footer>
                  {
                    information.map((info, index) => {
                      return <span className={style.tecno} key={index}>{info}</span>
                    })
                  }
                </footer>
              </article>
            </li>
          )
        })
          
        }
      </ul>
    </Section>
  )
}
