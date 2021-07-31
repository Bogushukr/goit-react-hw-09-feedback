import React from 'react';
import { useState, useCallback } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

import styles from './App.module.css';

export default function App() {
  const [good, setGoodState] = useState(0);
  const [neutral, setNeutralState] = useState(0);
  const [bad, setBadState] = useState(0);

  const updateFeedback = useCallback(event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'good':
        setGoodState(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralState(prevState => prevState + 1);
        break;
      case 'bad':
        setBadState(prevState => prevState + 1);
        break;
      default:
        break;
    }
  }, []);

  const countTotalFeedback = () => {
    const values = [good, neutral, bad];
    return values.reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const positive = good;
    return Math.round((positive / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  const options = ['good', 'neutral', 'bad'];

  return (
    <Section title={'Please leave feedback'}>
      <FeedbackOptions options={options} onLeaveFeedback={updateFeedback} />
      <h2 className={styles.App__title}>Statistics</h2>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </Section>
  );
}