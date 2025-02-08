import './App.scss';
import React from 'react';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/movie/:imdbID' element={<MovieDetail />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
      </Router>
    </div>
  );
}

export default App;