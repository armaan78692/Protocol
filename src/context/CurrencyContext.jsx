import { createContext, useContext, useState } from "react"

const CurrencyContext = createContext()

export const CurrencyProvider = ({ children }) => {

  const [selectedCurrency, setSelectedCurrency] =
    useState("INR")

  return (
    <CurrencyContext.Provider
      value={{
        selectedCurrency,
        setSelectedCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

export const useCurrency = () =>
  useContext(CurrencyContext)