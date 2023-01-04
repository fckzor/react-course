export const Book = props => {
  const {name, year, price} = props

  if (!name) return null

  return (
    <div className="book">
      <h2 className="book-title book-row">Название книги: <span>{name}</span></h2>
      <p className="book-year book-row">Год выпуска: {year} год</p>
      <p className="book-price book-row">Цена: {price} ₽</p>
    </div>
  )
}