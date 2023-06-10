import { useState } from 'react';
import RoundedProgressBar from '../rouded-progress-bar/RoundedProgressBar';
import './book.css';

export default function Book({ item, data, setData }) {
  const {
    percent, category, title, author, chapter, id,
  } = item;
  const [progress, setProgress] = useState(0);
  const deleteBook = () => {
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <article>
      <div className="first-column">
        <div className="container-1">
          <span className="School-of">{category}</span>
          <span className="Title Text-Style-6">{title}</span>
          <span className="Suzanne-Collins Text-Style-8">{author}</span>
        </div>
        <div className="container-2">
          <span className="Comments Text-Style-8">Comments</span>
          <div className="vertical-divider" />
          <span className="Remove Text-Style-8" onClick={deleteBook} role="button" tabIndex={0} onKeyDown={deleteBook}>Remove</span>
          <div className="vertical-divider" />
          <span className="Edit Text-Style-8">Edit</span>
        </div>
      </div>
      <div className="container-circular">
        {/* <div className="circular-progress" /> */}
        <RoundedProgressBar progress={progress} setProgress={setProgress} percent={percent} />
      </div>
      <div className="container-percent">
        <span className="-Percent-Complete">
          {progress}
          %
        </span>
        <span className="Completed Text-Style-2">Completed</span>
      </div>
      <div className="progress-divider" />
      <div className="container-right">
        <span className="Current-Chapter Text-Style-7">
          CURRENT CHAPTER
        </span>
        <span className="Current-Lesson Text-Style-4">
          {chapter}
        </span>
        <button className="primary-button" type="button">UPDATE PROGRESS</button>
      </div>
    </article>

  );
}
