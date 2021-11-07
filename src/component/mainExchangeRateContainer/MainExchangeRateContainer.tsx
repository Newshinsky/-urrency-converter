import { CourseType } from "../../reducers/converterReducer"
import { MainExchangeRate } from "./MainExchangeRate"
import s from "./MainExchangeRateContainer.module.css"

type PropsType = {
    currencyData: Array<CourseType>,
}


export const MainExchangeRateContainer = (props: PropsType) => {


    const USDExchangeRate = props.currencyData.find(e => e.Cur_Abbreviation === "USD")
    const EURExchangeRate = props.currencyData.find(e => e.Cur_Abbreviation === "EUR")
    const RUBExchangeRate = props.currencyData.find(e => e.Cur_Abbreviation === "RUB")


    return (
        <div className={s.MainExchangeRateContainer}>
            <MainExchangeRate exchangeInfo={USDExchangeRate!} />
            <MainExchangeRate exchangeInfo={EURExchangeRate!} />
            <MainExchangeRate exchangeInfo={RUBExchangeRate!} />
        </div>

    )
}