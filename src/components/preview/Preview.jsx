import React from 'react';
import Card from '../card/Card';

import styles from './preview.module.css';

const Preview = ({cards}) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      {
        cards.map(card => (
          <Card card={card} key={card.id} />
        ))
      }
    </section>
  );
};

export default Preview;