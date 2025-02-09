import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../components/apis/movieApi";
import {APIKey} from "../../components/apis/MovieApikey";
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

function Home() {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi.get(`?APIKey=${APIKey}&s=${movieText}&type=movie`)
      //type this for view data or go to Network tab >>>>  https://www.omdbapi.com/?APIKey=3d91bb7a&s=Harry&type=movie
      .catch((err) => {
        console.log("Err :", err);
      });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  },[]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  )
}

export default Home