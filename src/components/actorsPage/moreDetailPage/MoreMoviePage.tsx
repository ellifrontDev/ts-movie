import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/UseAppSelector";
import {useAppDispatch} from "../../../hooks/UseAppDispatch";
import {fetchingDeg, fetchingDegError, fetchingDegSuccess} from "../../../store/Reducer/detailReducer/MorePageSlice";
import axios from "axios";
import {APIKEY} from "../../../Apikey/APIKEY";

const MoreMoviePage = () => {

    const {moreId} = useParams()
    const {deg,error} = useAppSelector(state => state.moreDegSlice)
    const dispatch = useAppDispatch()
    const fetchingDegPage = async () => {
        try {
            dispatch(fetchingDeg())
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${moreId}/movie_credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingDegSuccess(responsive.data.cast))
        }catch (e:any){
            dispatch(fetchingDegError(e.message))
        }
    }

    useEffect(()=>{
        dispatch(fetchingDegPage)
    },[])

    return (
        <div className="container">
            <h2>Известность за</h2>
            <div className="actors">
            {
                deg.map(el => (
                    el.poster_path &&
                    <NavLink to={`/detail/${el.id}`}>
                            <div className="actors--photo">
                                <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`}
                                     alt=""/>

                            </div>
                    </NavLink>
                // <h5>{el.original_title}</h5>
                // <h4>{el.release_date}</h4>
                ))
            }
            </div>
        </div>
    );
};

export default MoreMoviePage;