import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootState} from "../store/Store";

export const useAppSelector:TypedUseSelectorHook<rootState> = useSelector