import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/UseAppSelector";
import {useAppDispatch} from "../../../hooks/UseAppDispatch";
import {AppDispatch} from "../../../store/Store";
import axios from "axios";
import {APIKEY} from "../../../Apikey/APIKEY";
import {fetchingDetail, fetchingDetailError, fetchingDetailSuccess} from "../../../store/Reducer/detailReducer/MovieDetailSlice";

const MovieDetailPage = () => {
    const {detailId} = useParams()
    const {detail,loader,error} = useAppSelector((state) => state.detailSlice)
    const dispatch = useAppDispatch()
    const fetchingDetailMovie = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingDetail())
            const responsive = await  axios.get(`https://api.themoviedb.org/3/movie/${detailId}?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingDetailSuccess(responsive.data))
        }catch (e:any){
            dispatch(fetchingDetailError(e.message))
        }
    }

    console.log(detail)
    useEffect(() => {
        dispatch(fetchingDetailMovie)
    },[])

    if (error) {
        return <div>Error: {error}</div>
    }

    let {backdrop_path, original_title,title,genres,runtime,vote_average, overview, release_date,} = detail
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.9)),url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path})no-repeat center center `
        }}>
            <div className="container">
                <div className="details">

                        <div className="details--inform">
                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`} alt=""/>
                            <div className="details--item">
                                <h1>{original_title} {release_date}</h1>
                                <p className="details--desc">{runtime}</p>
                                {/*{*/}
                                {/*    genres ? genres.map(el => (*/}
                                {/*        <div className="details--genres">{el.name}</div>*/}
                                {/*    )) : ''*/}
                                {/*}*/}
                                <div className="details--titles">
                                    {/*<button className="details--titles__vote">{Math.floor (vote_average * 10)}%</button>*/}
                                    <p>Рейтинг</p>
                                </div>
                                <p>{overview}</p>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;