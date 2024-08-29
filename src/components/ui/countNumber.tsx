"use client";
import CountUp from "react-countup";

type TCountProp = {
  start: number;
  end: number;
  duration: number;
};

const CountNumber = ({ start, end, duration }: TCountProp) => {
  return <CountUp start={start} end={end} duration={duration} />;
};

export default CountNumber;
