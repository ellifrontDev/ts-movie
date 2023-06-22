import {combineReducers, configureStore} from "@reduxjs/toolkit";
import movieSlice from "./Reducer/UserSlice";
import detailSlice from "./Reducer/detailReducer/MovieDetailSlice";
import actorsSlice from "./Reducer/detailReducer/ActorsDetailSlice";
import trailersSlice from "./Reducer/detailReducer/TrailerDetailSLice";
import moreSlice from "./Reducer/detailReducer/MovieBioSlice";
import moreDegSlice from "./Reducer/detailReducer/MorePageSlice"
import searchSlice from "./Reducer/search/SearchReducer";

const rootReducer = combineReducers({
    movieSlice,
    detailSlice,
    actorsSlice,
    trailersSlice,
    moreSlice,
    moreDegSlice,
    searchSlice
})

export const setUpStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootState = ReturnType<typeof rootReducer>
type AppStore =ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']