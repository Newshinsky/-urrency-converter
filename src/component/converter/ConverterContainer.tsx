import { ChangeEvent } from "react"
import { CourseType } from "../../reducers/converterReducer"
import { Converter, currAbbreviation } from "./Converter"


type PropsType = {
    currencyData: Array<CourseType>,
    isFetching: boolean,
    currAbbreviations: Array<currAbbreviation>
    HandleFrom: (e: ChangeEvent<HTMLInputElement>) => void
    fromNum: number,
    setFromNum: (num: string) => void
}




export function ConverterContainer(props: PropsType) {

    return (
        <div className="wrapper" >
            <Converter
                currencyData={props.currencyData}
                isFetching={props.isFetching}
                currAbbreviations={props.currAbbreviations}
                HandleFrom={props.HandleFrom}
                fromNum={props.fromNum}
                setFromNum={props.setFromNum}
            />
        </div>
    )
}