const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency:"USD",
    style:"currency"
})


//currency formatter

export const formatCurrencty = (number:number) :string =>{
    return CURRENCY_FORMATTER.format(number);
}