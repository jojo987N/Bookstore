import { useDispatch, useSelector } from 'react-redux';
import './form.css';
import { useState } from 'react';
import { addBook } from '../../redux/books/booksSlice';

export default function Form() {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState('John Smith');
  const { data } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      author: selected,
      title: input,
      itemId: `item${data.length + 1}`,
    }));
  };
  return (
    <div>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          className="input title-input"
          placeholder="Book title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <select
          className="input category-input"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="John Smith">John Smith</option>
          <option value="Leo Tolstoy">Leo Tolstoy</option>
          <option value="Richard Dawkins">Richard Dawkins</option>
        </select>
        <button className="primary-button-big" type="submit" onClick={addNewBook}>ADD BOOK</button>

      </form>
    </div>
  );
}
