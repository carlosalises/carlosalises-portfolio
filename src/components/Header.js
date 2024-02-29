import React from 'react'
import styles from '../style/HeaderStyle.module.css'
import Section from './Section'

export default function Header() {
  return (
    <Section>
      <div>
        <div className={styles.info}>
          <h1>CARLOS ALISES MORA</h1>
          <h2>DESARROLLADOR APLICACIONES MULTIPLATAFORMA</h2>
          <span>Barcelona, 08206</span>
          <footer>
          <a href="https://www.linkedin.com/in/carlosalisesmora/" target='_blank' rel='noreferrer'>LINKEDIN</a>
          <a href="https://github.com/carlosalises" target='_blank' rel='noreferrer'>GITHUB</a>
          </footer>
        </div>
      </div>
    </Section>
  )
}
