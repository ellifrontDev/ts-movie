import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {AppDispatch} from "../../store/Store"
import {fetchingTrailers, fetchingTrailersError, fetchingTrailersSuccess} from "../../store/Reducer/detailReducer/TrailerDetailSLice";
import axios from "axios";
import {APIKEY} from "../../Apikey/APIKEY";


const TrailerDetailPage = () => {

    const {detailId} = useParams()
    const {trailer, error} = useAppSelector(state => state.trailersSlice)
    const dispatch = useAppDispatch()

    const fetchingTrailersPage = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingTrailers())
            const responsive = await  axios.get(`https://api.themoviedb.org/3/movie/${detailId}/videos?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingTrailersSuccess(responsive.data.results))
        }catch (e: any){
            dispatch(fetchingTrailersError(e.message))
        }
    }

    useEffect(() => {
        dispatch(fetchingTrailersPage)
    }, [])

    console.log(trailer)

    return (
        <div className="container">
            <h2 style={{paddingTop: "20px"}}>Последние трейлеры </h2>
            <div className="actors">   {
                trailer.map(el => (
                    <div className="actors--trailers">
                        <iframe src={`https://www.youtube.com/embed/${el.key}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </div>
                ))
            }</div>

        </div>
    );
};

export default TrailerDetailPage;