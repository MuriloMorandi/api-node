

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