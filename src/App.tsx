import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalData } from './api/apiData';
import './App.css';
import { ConverterContainer } from './component/converter/ConverterContainer';
import { OtherExchangeRate } from './component/currentExchangeRate/OtherExchangeRate';
import { Header } from './component/header/Header';
import { MainExchangeRateContainer } from './component/mainExchangeRateContainer/MainExchangeRateContainer';
import { CourseType, setCurrentCourseAC, setIsFetchingAC } from './reducers/converterReducer';
import { RootStoreType } from './store';


export type ActionType =
  ReturnType<typeof setCurrentCourseAC> |
  ReturnType<typeof setIsFetchingAC>

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGlobalData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const currencyData = useSelector<RootStoreType, Array<CourseType>>(state => state.converter.data)
  const isFetching = useSelector<RootStoreType, boolean>(state => state.converter.isFetching)
  const currAbbreviations = currencyData.map(e => { return { value: e.Cur_Abbreviation, label: e.Cur_Abbreviation } })
  const [fromNum, setFromNum] = useState<any>(0)


  function HandleFrom(e: ChangeEvent<HTMLInputElement>) {
    setFromNum(e.currentTarget.value)
  }

  if (isFetching) {
    return (
      <div>
        ...Waitng
      </div>
    )
  }
  return (
    <div>
      <Header />
      <ConverterContainer
        currencyData={currencyData}
        isFetching={isFetching}
        currAbbreviations={currAbbreviations}
        HandleFrom={HandleFrom}
        fromNum={fromNum}
        setFromNum={setFromNum}
      />
      <MainExchangeRateContainer
        currencyData={currencyData} />
      <OtherExchangeRate
        currencyData={currencyData} />
    </div>
  );
}

export default App;
