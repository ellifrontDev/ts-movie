import React from 'react';
import MovieDetailPage from "./movieDetail/MovieDetailPage";
import ActorsDetailPage from "../actorsPage/ActorsDetailPage";
import TrailerDetailPage from "../trailerPage/TrailerDetailPage";

const DetailPage = () => {
    return (
        <div>
            <MovieDetailPage/>
            <ActorsDetailPage/>
            <TrailerDetailPage/>
        </div>
    );
};

export default DetailPage;