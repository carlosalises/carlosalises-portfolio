import React from 'react'
import Section from './Section'
import {education} from '../info/info'
import style from '../style/Education.module.css'

export default function Education() {
  return (
    <Section title="EDUCACIÓN">
        {
          education.map(({place, area, date}, index)=>{
            return (
              <article key={index} className={style.education}>
                <header>
                    <h3>{place}</h3>
                    <h4>{date}</h4>
                </header>
                <p>{area}</p>
              </article>
            )
          })
        }
    </Section>
  )
}
