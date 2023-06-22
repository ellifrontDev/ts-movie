import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/UseAppSelector";
import {useAppDispatch} from "../../../hooks/UseAppDispatch";
import {fetchingMore, fetchingMoreError, fetchingMoreSuccess} from "../../../store/Reducer/detailReducer/MovieBioSlice";
import axios from "axios";
import {APIKEY} from "../../../Apikey/APIKEY";
import {BiLoaderAlt} from "react-icons/bi"
import MoreMoviePage from "./MoreMoviePage";

const MovieBioPage = () => {

    const [viewMore,setViewMore] = useState(false)

    const {moreId} = useParams()
    const {more, error, loader} = useAppSelector(state => state.moreSlice)
    const dispatch = useAppDispatch()

    const fetchingMorePage = async () =>{
        try {
            dispatch(fetchingMore())
            const responsive = await axios.get(`https://api.themoviedb.org/3/person/${moreId}?api_key=${APIKEY}&language=en-US`)
            dispatch(fetchingMoreSuccess(responsive.data))
        }catch (e:any){
            dispatch(fetchingMoreError(e.message))
        }
    }

    useEffect(() => {
        dispatch(fetchingMorePage)
    },[])

    if (loader){
        return <div>
            <div className="bio">
                <BiLoaderAlt/>
            </div>
        </div>
    }


    let {profile_path,name,birthday,biography} = more

    return (
        <div className="container">
          <div className="bio">
              <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
              <div>
                  <h1>{name} <p>{birthday}</p></h1>
                  <h2>Биография</h2>

                  <h4>{biography ? biography.length < 201 ? biography : (<p style={{
                          display: viewMore ? 'none' : 'block'
                      }}>{biography.slice(0,200)}</p>
                  ) : ''}
                  <p style={{cursor: "pointer",  display: viewMore ? 'none' : 'block', color: 'blue'}} onClick={() => setViewMore(!viewMore)}>Читать далее...</p>

                      <p style={{
                          display: viewMore ? 'block' : 'none'
                      }}>{biography}</p>

                      <p onClick={() => setViewMore(!viewMore)} style={{
                          display: viewMore ? "block": 'none',
                          cursor: 'pointer', color: 'blue'
                      }}>читать меньше.</p>
                  </h4>

              </div>
          </div>
            <MoreMoviePage/>
        </div>
    );
};

export default MovieBioPage;