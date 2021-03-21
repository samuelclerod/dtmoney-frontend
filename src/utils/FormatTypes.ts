export const formatCurreny = (value: number) => new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(value)

export const formatDate = (date: Date) => Intl.DateTimeFormat('pt-BR').format(date)