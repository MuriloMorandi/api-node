

export function CurrencyFormat(
    value: number,
    locales: Intl.LocalesArgument = 'pt-BR',
    options: Intl.NumberFormatOptions = {
        currency: 'BRL',
    }
) {
    return new Intl.NumberFormat(
        locales.toString()
        ,
        {
            ...options,
            style: 'currency',
        }).format(value);
}



//Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)