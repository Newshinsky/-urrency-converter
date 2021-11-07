import CurrencyFlag from 'react-currency-flags'
import { CourseType } from "../../reducers/converterReducer"
import s from "./OtherExchangeRate.module.css"


type PropsType = {
    currencyData: Array<CourseType>,
}

export const OtherExchangeRate = (props: PropsType) => {

    const filterCurrencyData = props.currencyData.filter(e =>
        e.Cur_Abbreviation !== "XDR" &&
        e.Cur_Abbreviation !== "USD" &&
        e.Cur_Abbreviation !== "EUR" &&
        e.Cur_Abbreviation !== "RUB"
    )

    const date = new Date(filterCurrencyData[0].Date)
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()


    return (
        <div className={s.OtherExchangeRateWrapper}>
            <div className="wrapper" >
                <div>
                    <h3>
                        The official exchange rate of
                        the Belarusian ruble against
                        foreign currencies
                    </h3>
                    <h5> Date {day}.{month + 1}.{year} </h5>
                    {filterCurrencyData.map(
                        (e, i) => {
                            return (
                                <div className={s.CourseItem} key={i}>
                                    <span className={s.valueName}>
                                        <span >  <CurrencyFlag currency={e.Cur_Abbreviation} width={20} />
                                        </span> {e.Cur_Name}
                                    </span>
                                    <span className={s.valueInfo}>
                                        {e.Cur_Scale} {e.Cur_Abbreviation}
                                    </span>
                                    <span className={s.valueRate}>
                                        {e.Cur_OfficialRate}
                                    </span>
                                </div >
                            )
                        }
                    )
                    }

                </div>
            </div>

        </div>
    )
}