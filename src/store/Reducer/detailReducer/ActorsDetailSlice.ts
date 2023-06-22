import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IActors} from "../../../types/UserInterface";


interface IGetActors {
    actors: IActors[]
    loader: boolean
    error: string
}

const initialState:IGetActors = {
    actors: [],
    loader: false,
    error: ''
}

export const actorSlice =createSlice({
    name: 'actors',
    initialState,
    reducers: {
        fetchingActors(state) {
            state.loader = true
        },

        fetchingActorsSuccess(state,action: PayloadAction<IActors[]>) {
            state.actors = action.payload
            state.loader = false
            state.error = ''
        },

        fetchingActorsError(state,action: PayloadAction<string>) {
            state.loader = false
            state.actors = []
            state.error = action.payload
        }
    }
})

export default actorSlice.reducer
export const {fetchingActors,fetchingActorsSuccess,fetchingActorsError} = actorSlice.actions