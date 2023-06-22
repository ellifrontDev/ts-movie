import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITrailers} from "../../../types/UserInterface";


interface IDetailTrailers{
    trailer: ITrailers[]
    loader: boolean
    error: string
}

const initialState: IDetailTrailers = {
    trailer: [],
    loader: false,
    error: ''
}

export const trailersSlice = createSlice({
    name: "trailers",
    initialState,
    reducers : {
        fetchingTrailers(state){
            state.loader = true
        },
        fetchingTrailersSuccess(state, action: PayloadAction<ITrailers[]>){
            state.trailer = action.payload
            state.loader = false
            state.error = ''
        },
        fetchingTrailersError(state, action: PayloadAction<string>){
            state.loader = false
            state.trailer = []
            state.error = action.payload
        }
    }
})

export default trailersSlice.reducer
export const {fetchingTrailers, fetchingTrailersSuccess,fetchingTrailersError} = trailersSlice.actions