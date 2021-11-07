import axios from "axios"
import { Dispatch } from "react"
import { ActionType } from "../App"

import { setCurrentCourseAC, setIsFetchingAC } from "../reducers/converterReducer"






export const getGlobalData = () => {
    return async (dispatch: Dispatch<ActionType>) => {
        dispatch(setIsFetchingAC(false))
        const response = await axios.get("https://www.nbrb.by/api/exrates/rates?periodicity=0")
        dispatch(setCurrentCourseAC(response.data))
        dispatch(setIsFetchingAC(false))
    }
}