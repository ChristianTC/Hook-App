
export const Quote = ({data}) => {
  const {quote, author} = data
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{quote}</p>
      <footer className="blockquote-footer"> {author}</footer>
    </blockquote>
  )
}
