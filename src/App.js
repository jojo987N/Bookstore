import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
import { getBooks } from './redux/books/booksSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(addBook());
    dispatch(getBooks());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
