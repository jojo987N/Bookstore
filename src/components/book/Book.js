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
          <span className="School-of montserrat">{category}</span>
          <span className="Title Text-Style-6 roboto">{title}</span>
          <span className="Suzanne-Collins Text-Style-8 roboto">{author}</span>
        </div>
        <div className="container-2">
          <span className="Comments Text-Style-8 roboto">Comments</span>
          <div className="vertical-divider" />
          <span className="Remove Text-Style-8 roboto" onClick={deleteBook} role="button" tabIndex={0} onKeyDown={deleteBook}>Remove</span>
          <div className="vertical-divider" />
          <span className="Edit Text-Style-8 roboto">Edit</span>
        </div>
      </div>
      <div className="container-circular">
        <div className="circular-progress" />
      </div>
      <div className="container-percent">
        <span className="-Percent-Complete montserrat">
          {Math.floor(64 / parseInt(item[0].slice(-1), 10))}
          %
        </span>
        <span className="Completed Text-Style-2 montserrat">Completed</span>
      </div>
      <div className="progress-divider" />
      <div className="container-right">
        <span className="Current-Chapter Text-Style-7 roboto">
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
