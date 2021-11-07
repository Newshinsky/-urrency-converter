
import { ConverterContainer } from "../converter/ConverterContainer"
import exchangeImg from "./../../img/exchange-svgrepo-com.svg"
import s from "./Header.module.css"


export const Header = () => {
    return (
        <header className="wrapper">
            <div className="container">
                <img src={exchangeImg} width="100" height="95" alt="Currency Converter" />
                <h1 className={s.Logo}>
                    Currency Converter
                </h1>
            </div>
     
        </header>
    )
}