import { useParams } from "react-router-dom"

export default function Book() {
  const { id } = useParams()
  return <h1>book</h1>
}
