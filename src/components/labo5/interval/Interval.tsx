import { Fragment } from 'react';
import { RandomValue } from './RandomValue';
import { Timer } from './Timer';

export const Labo5Interval = () => {

  return (
    <Fragment>
      <Timer></Timer>
      <RandomValue min={1} max={100}></RandomValue>
      <RandomValue min={100} max={200}></RandomValue>
    </Fragment>
  );
}