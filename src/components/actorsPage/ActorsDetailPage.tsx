import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/UseAppSelector";
import {useAppDispatch} from "../../hooks/UseAppDispatch";
import {AppDispatch} from "../../store/Store";
import {fetchingActors, fetchingActorsError, fetchingActorsSuccess} from "../../store/Reducer/detailReducer/ActorsDetailSlice";
import axios from "axios";
import {APIKEY} from "../../Apikey/APIKEY";
// import Slider from "react-slick"

const ActorsDetailPage = () => {
    const {detailId} = useParams()
    const {actors, error} = useAppSelector(state => state.actorsSlice)
    const dispatch = useAppDispatch()
    const fetchingActorsPage = async (dispatch: AppDispatch) => {
        try {
            dispatch(fetchingActors())
            const responsive = await axios.get(`https://api.themoviedb.org/3/movie/${detailId}/credits?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingActorsSuccess(responsive.data.cast))
        } catch (e: any) {
            dispatch(fetchingActorsError(e.message))
        }
    }

    useEffect(() => {
        dispatch(fetchingActorsPage)
    }, [])

    if (error) {
        return <div>Error: {error}</div>
    }


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="container">

            <h2 style={{ paddingBottom: "20px"}}>В главных ролях</h2>
            <div className="actors">
                {
                    actors.map(el => (
                            el.profile_path &&
                            <div key={el.id}>
                                <div className="actors--photo">
                                    <NavLink to={`/more/${el.id}`} >
                                        <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face${el.profile_path}`}
                                             alt=""/></NavLink>
                                    <h4>{el.original_name}</h4>
                                    <h5>{el.character}</h5>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>

    );
};

export default ActorsDetailPage;