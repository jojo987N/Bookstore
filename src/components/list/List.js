import { useState } from 'react';
import database from '../../global';
import Book from '../book/Book';
import './list.css';

export default function List() {
  const [data, setData] = useState(database);
  return (
    <div className="container-list">
      {data.map((item) => <Book key={item.id} category={item.category} title={item.title} author={item.author} percentage={item.percent} chapter={item.chapter} setData={setData} data={data} id={item.id} />)}
    </div>
  );
}
