/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './rounded-progress-bar.css';

export default function RoundedProgressBar({ progress, setProgress, percent }) {
  useEffect(() => {
    const interval = setInterval(() => {
      // console.log(progress);
      setProgress((progress) => progress + 1);
    }, 50);
    if (progress === percent) { clearInterval(interval); }
    return () => clearInterval(interval);
  }, [progress, setProgress, percent]);
  return (
    <div className="rounded-progress" data-progress="" style={{ background: `conic-gradient(#307bbe calc(${progress}%), #e8e8e8 0deg)` }} />
  );
}
