import React from 'react'
import style from '../style/Experience.module.css'
import { work } from '../info/info'
import Section from './Section'

export default function Experience() {
  return (
      <Section title="EXPERIENCIA LABORAL">
          {
            work.map(({place, position, responsabilities, date}, index) => {
              return (
                 <div key={index} className={style.experience}>
                    <header>
                      <div>
                        <h2 className={style.position}>{position}</h2>
                        <h3 className={style.place}>{place}</h3>
                      </div>
                      <time className={style.date}>{date}</time>
                    </header>
                    <ul className={style.responsabilities}>
                      {responsabilities.map((rsp, index) =>{
                        return (
                          <li key={index}>- {rsp}</li>
                        )
                      })}
                    </ul>
                 </div>
              )
            })
          }
      </Section>
  )
}
