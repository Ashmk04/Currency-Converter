import {React, useId} from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency='USD',
    amountDisable=false,

}){
    const amountInputId = useId()
    return(
        <div className=" htmlFor={amountInputId} flex w-full max-w-md mx-auto bg-white border border-gray-200 rounded-2xl p-5 text-sm shadow-md">
            <div className="w-1/2">
                <label className="text-black mb-3 inline-block">
                    {label}
                </label>
                <input  
                id={amountInputId}
                type="number"
                placeholder="Amount"
                value={amount}
                disabled={amountDisable}
                onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}
                className="outline-none w-full bg-transparent py-1.5 text-2xl font-semibold text-gray-800 "
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black mb-3 w-full">Currency Type</p>
                <select className="rounded-lg px-3 py-2 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                    {currency}
                    </option>
                ))}
                </select>
            </div>
        </div>
    )
}
export default InputBox