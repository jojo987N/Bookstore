import { useSelector } from 'react-redux';
import Book from '../book/Book';
import './list.css';

export default function List() {
  const { data } = useSelector((state) => state.books);
  return (
    <div className="container-list">
      {data.map((item) => <Book key={item.id} item={item} />)}
    </div>
  );
}
