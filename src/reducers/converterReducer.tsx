import { ActionType } from "../App"



const SET_CURRENT_COURSE = "SET_CURRENT_COURSE"
const SET_IS_FETCHING = "SET_IS_FETCHING"

export type CourseType = {
    Cur_ID: number,
    Date: string,
    Cur_Abbreviation: string,
    Cur_Scale: number,
    Cur_Name: string,
    Cur_OfficialRate: number
}

const initialState = {
    data: [{
        Cur_ID: 431,
        Date: "2021-12-28T00:00:00",
        Cur_Abbreviation: "USD",
        Cur_Scale: 1,
        Cur_Name: "Доллар США",
        Cur_OfficialRate: 2.4226
    }, {
        Cur_Abbreviation: "EUR",
        Cur_ID: 451,
        Cur_Name: "Евро",
        Cur_OfficialRate: 2.8233,
        Cur_Scale: 1,
        Date: "2021-12-28T00:00:00",
    }, {
        Cur_Abbreviation: "RUB",
        Cur_ID: 456,
        Cur_Name: "Российских рублей",
        Cur_OfficialRate: 3.4363,
        Cur_Scale: 100,
        Date: "2021-12-28T00:00:00",
    },
    {
        Cur_Abbreviation: "UAH",
        Cur_ID: 449,
        Cur_Name: "Гривен",
        Cur_OfficialRate: 9.2263,
        Cur_Scale: 100,
        Date: "2021-12-28T00:00:00",
    }],
    isFetching: false
}

export type StateType = {
    data: Array<CourseType>
    isFetching: boolean
}


export function converterReducer(state: StateType = initialState, action: ActionType) {
    switch (action.type) {
        case SET_CURRENT_COURSE:
            return { ...state, data: action.payload }
        case SET_IS_FETCHING:
            return { ...state, isFetching: action.payload }
        default: return state
    }
}



export const setCurrentCourseAC = (data: any) => {
    return ({
        type: SET_CURRENT_COURSE,
        payload: data
    })
}

export const setIsFetchingAC = (isFetching: boolean) => {
    return ({
        type: SET_IS_FETCHING,
        payload: isFetching
    })
}





