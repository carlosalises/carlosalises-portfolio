import React from 'react'
import styles from '../style/HeaderStyle.module.css'
import Section from './Section'

export default function Header() {
  return (
    <Section>
        <article className={styles.info}>
          <h1 className={styles.myName}>CARLOS ALISES MORA</h1>
          <h2 className={styles.position}>DESARROLLADOR APLICACIONES MULTIPLATAFORMA</h2>
          <span>Barcelona, 08206</span>
          <footer className={styles.buttons}>
            <a href="https://www.linkedin.com/in/carlosalisesmora/" target='_blank' rel='noreferrer'>LINKEDIN</a>
            <a href="https://github.com/carlosalises" target='_blank' rel='noreferrer'>GITHUB</a>
          </footer>
        </article>
    </Section>
  )
}
