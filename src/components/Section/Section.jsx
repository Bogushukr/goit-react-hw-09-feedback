import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={styles.Section}>
      <h1 className={styles.Section__title}>{title}</h1>
      {children}
    </section>
  );
}

Section.defaultProps = { title: '(empty)' };
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element),
};