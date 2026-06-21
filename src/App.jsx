import { useState } from 'react'
import useCurrency from './hooks/UseCurrency'
import InputBox from './components/InputBox'

function App() {
  const [amount, setAmount] = useState("1")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrency(from)
  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
    
  } 

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='w-full min-h-screen'

      style={{ background: `url(https://faircloughpalmer.ch/images/hero-global-investment-markets.jpg)` }}
    >
      <div className='min-h-screen flex flex-col justify-center items-centes backdrop-blur-xs border border-white/10'>

        <InputBox
          label="From"
          amount= {amount}
          onAmountChange= {(amount)=> setAmount(amount)}
          onCurrencyChange= {(currency)=> setTo(currency)}
          currencyOptions= {options}
          selectCurrency={from}
        />
        <div >
          <button className='flex max-w-md mx-auto font-semibold m-1 px-2.5 rounded-3xl bg-blue-300 cursor-pointer'
          onClick={swap}
          >
            Swap
          </button>
        </div>
        <InputBox
          label="To"
          amount= {convertedAmount}
          onCurrencyChange= {(currency)=> setTo(currency)}
          currencyOptions= {options}
          selectCurrency={to}
          amountDisable
        />
        <div>
          <button className='flex  max-w-md mx-auto text-lg font-semibold m-3 px-10 bg-blue-400 rounded-3xl shadow-lg cursor-pointer'
            onClick={convert}
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
