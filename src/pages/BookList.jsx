import { Link } from "react-router-dom"

export default function BookList() {
  return (
    <>
      <h1>BookList</h1>
      <Link to="/books/1">Book1 BOK2</Link>
      <Link to="/books/2"></Link>
      <br />
      <Link to="/books/new">New BOOK</Link>
    </>
  )
}
