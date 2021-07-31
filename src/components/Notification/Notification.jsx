import React from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <div className={styles.Notification}>
      <p className={styles.Notification__title}>{message}</p>
    </div>
  );
}

Notification.propTypes = { message: PropTypes.string.isRequired };
Notification.defaultProps = { message: '(empty)' };