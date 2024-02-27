import React from 'react'
import Section from './Section'
import style from '../style/Projects.module.css'
import {projects} from '../info/info'

export default function Projects() {

  return (
    <Section title="PROYECTOS">
      <ul className={style.projects}>
        {projects.map(({name, description, information}, index) => {
          return (
            <li>
              <article key={index} className={style.project}>
                <header>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </header>
                <footer>
                  {
                    information.map((info) => {
                      return <span>{info}</span>
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
