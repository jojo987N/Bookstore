import { useDispatch } from 'react-redux';
import './form.css';
import { useState } from 'react';
import { addBook } from '../../redux/books/booksSlice';

export default function Form() {
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState('Action');
  const dispatch = useDispatch();
  const addNewBook = (e) => {
    e.preventDefault();
    dispatch(addBook({
      category: selected,
      title: input,
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
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button className="primary-button-big" type="submit" onClick={addNewBook}>ADD BOOK</button>

      </form>
    </div>
  );
}
