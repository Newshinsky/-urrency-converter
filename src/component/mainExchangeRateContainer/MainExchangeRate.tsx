
import CurrencyFlag from 'react-currency-flags'
import { CourseType } from "../../reducers/converterReducer"
import s from "./MainExchangeRateContainer.module.css"

type PropsType = {
    exchangeInfo: CourseType
}

export const MainExchangeRate = (props: PropsType) => {


    return (
        <div className={s.MainExchangeRateWrapper}>
            <div className={s.ExchangeItemInfo}>
                <span>
                    <CurrencyFlag currency={props.exchangeInfo.Cur_Abbreviation} width={70} />
                </span>
                <span>
                    <h3>
                        {props.exchangeInfo.Cur_Scale} {props.exchangeInfo.Cur_Abbreviation}
                    </h3>
                </span>
            </div>
            <div className={s.ExchangeItemRate}>
                <h3>
                    {props.exchangeInfo.Cur_OfficialRate}
                </h3>
            </div>
        </div>
    )
}