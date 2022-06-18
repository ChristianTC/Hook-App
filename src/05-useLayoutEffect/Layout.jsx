// https://breakingbadapi.com/

import { useCounter } from "../hooks/useCounter"
import { useFetch } from "../hooks/useFetch"
import { LoadingQuote } from "../03-examples/LoadingQuote"
import { Quote } from "../03-examples/Quote"

export const Layout = () => {

  const {state: quoteId, increment, decrement, reset} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${quoteId}`)
  
  const { author, quote } = !!data && data[0]


  console.log(data);

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {(isLoading) 
      ? <LoadingQuote /> 
      : <Quote data={{quote: quote, author:author}} />}

      <button onClick={()=>decrement()} className="btn btn-primary m-1">
        Previous quote
      </button>
      <button 
        onClick={()=>increment()} 
        className="btn btn-primary m-1"
        disabled={ isLoading }
      >
        Next quote
      </button>
      <button onClick={()=>reset()} className="btn btn-primary m-1">
        Reset
      </button>

    </>
  )
}
