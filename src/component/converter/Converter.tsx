import { ChangeEvent, useState } from "react";
import Select from 'react-select';
import { CourseType } from "../../reducers/converterReducer";
import s from "./Converter.module.css";

export type currAbbreviation = {
    value: string,
    label: string
}

type propsType = {
    currencyData: Array<CourseType>,
    isFetching: boolean,
    currAbbreviations: Array<currAbbreviation>
    HandleFrom: (e: ChangeEvent<HTMLInputElement>) => void
    fromNum: number,
    setFromNum: (num: string) => void
}

export const Converter = (props: propsType) => {

    const [fromExchange, setFromExchange] = useState<any>();
    let currExachangeRate
    if (!fromExchange) {
        currExachangeRate = 1
    } else {
        currExachangeRate = props.currencyData.find(e => fromExchange.value === e.Cur_Abbreviation)!.Cur_OfficialRate
    }


    return (
        <div className={s.converterInfoWrapper}>
            <div>
                <h3> Amount </h3>
                <input type="number"
                    value={props.fromNum}
                    onChange={props.HandleFrom}
                />
            </div>
            <div className={s.selectWrapper}>
                <h3> From </h3>
                <Select
                    options={props.currAbbreviations}
                    defaultInputValue={fromExchange}
                    onChange={setFromExchange}
                    placeholder={'Choose default value'}
                    theme={(theme) => ({
                        ...theme,
                        borderRadius: 10,
                        colors: {
                            ...theme.colors,
                            primary25: 'hotpink',
                            primary: 'black',
                        },
                    })}
                />
            </div>
            <div>
                <h3> To BYN </h3>
                <input type="number"
                    value={(props.fromNum * currExachangeRate).toFixed(2)}
                    disabled
                />
            </div>
        </div>
    )
}