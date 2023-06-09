import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Calculator from './components/calculator/Calculator';
import Layout from './components/layout/Layout';
// import Quote from './components/quote/Quote';
import Home from './components/home/Home';
import Categories from './components/categories/Categories';
// import Book from './components/book/Book';
// import List from './components/list/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          {/* <Route path="quote" element={<Quote />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
