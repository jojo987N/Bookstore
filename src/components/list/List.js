import { useState } from 'react';
import database from '../../global';
import Book from '../book/Book';
import './list.css';

export default function List() {
  const [data, setData] = useState(database);
  return (
    <div className="container-list">
      {data.map((item) => <Book key={item.id} item={item} setData={setData} data={data} />)}
    </div>
  );
}
