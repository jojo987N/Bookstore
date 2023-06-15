import { useDispatch } from 'react-redux';
import './book.css';
import { removeBook, removeBookFromStore } from '../../redux/books/booksSlice';

export default function Book({ item }) {
  const {
    category, title, author, chapter,
  } = item[1][0];
  const dispatch = useDispatch();
  const deleteBook = () => {
    dispatch(removeBookFromStore(item[0]));
    dispatch(removeBook(item[0]));
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
        <div className="circular-progress" />
      </div>
      <div className="container-percent">
        <span className="-Percent-Complete">
          {Math.floor(64 / parseInt(item[0].slice(-1), 10))}
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
