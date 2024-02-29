import React from 'react'
import Section from './Section'
import { skills } from '../info/info'
import style from '../style/Skills.module.css'

export default function Skills() {
  return (
    <Section title="HABILIDADES">
        <ul className={style.skills}>
            {
                skills.map((skill, index)=>{
                    return (
                        <li key={index}>
                            <span>{skill}</span>
                        </li>
                    )
                })
            }
        </ul>
    </Section>
  )
}

