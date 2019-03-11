import format from 'date-fns/format'
import ptBR from 'date-fns/locale/pt-BR'

export default function formatDate(date, token) {
  return format(date, token, {
    locale: ptBR,
  })
}
