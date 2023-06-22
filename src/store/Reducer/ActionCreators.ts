import {AppDispatch} from "../Store";
import {fetchingMovie, fetchingMovieError, fetchingMovieSuccess} from "./UserSlice";
import axios from "axios";
import {APIKEY} from "../../Apikey/APIKEY";


export const fetchingPopular = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=8`)
        dispatch(fetchingMovieSuccess(responsive.data.results))
    }catch (e: any) {
        dispatch(fetchingMovieError(e.message))
    }
}

export const fetchingNowPlaying = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=3`)
        dispatch(fetchingMovieSuccess(responsive.data.results))
    }catch (e: any) {
        dispatch(fetchingMovieError(e.message))
    }
}

export const fetchingTopRated = async (dispatch: AppDispatch) => {
    try {
        dispatch(fetchingMovie())
        const responsive = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=30`)
        dispatch(fetchingMovieSuccess(responsive.data.results))
    }catch (e: any) {
        dispatch((fetchingMovieError(e.message)))
    }
}