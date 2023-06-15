import { useSelector } from 'react-redux';
import Book from '../book/Book';
import './list.css';

export default function List() {
  const { data, isLoading, error } = useSelector((state) => state.books);
  if (error) { return <div>{error.message}</div>; }
  return (
    isLoading ? <div className="loading">Loading ...</div> : (
      <div className="container-list">
        {data.map((item) => <Book key={item[0]} item={item} />)}
      </div>
    )
  );
}
