import React, {useEffect} from 'react';
import {useAppSelector} from "../hooks/UseAppSelector";
import {useAppDispatch} from "../hooks/UseAppDispatch";
import {fetchingTopRated} from "../store/Reducer/ActionCreators";
import {NavLink} from "react-router-dom";

const TopRated = () => {
    const {movie,loader,error} = useAppSelector(state => state.movieSlice)
    const dispatch = useAppDispatch()
    useEffect( () => {
        dispatch(fetchingTopRated)
    })
    return (
        <section id="popular">
            <div className="container">
                <div className="popular">
                    {
                        movie.map(el =>(
                            <div key={el.id}>
                                <div className="popular--main">
                                    <NavLink to={`/detail/${el.id}`}>
                                        <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face${el.poster_path}`}
                                             alt=""/></NavLink>
                                        <h5>{el.original_title}</h5>
                                        <h4>({el.release_date})</h4>

                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default TopRated;