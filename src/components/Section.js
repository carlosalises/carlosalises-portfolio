import React from 'react';
import style from '../style/Section.module.css'

const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};

export default Section;