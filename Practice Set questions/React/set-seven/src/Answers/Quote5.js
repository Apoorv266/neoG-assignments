import React, { useEffect, useState } from 'react'

const Quote5 = () => {

    const fakeFetch = () => {
        const quotes = [
            {
                content: "Be yourself; everyone else is already taken.",
                author: "Oscar Wilde",
            },
            {
                content: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                author: "Albert Einstein",
            },
            {
                content: "So many books, so little time.",
                author: "Frank Zappa",
            },
            {
                content: "A room without books is like a body without a soul.",
                author: "Marcus Tullius Cicero",
            },
            {
                content: "In three words I can sum up everything I've learned about life: it goes on.",
                author: "Robert Frost",
            },
        ];

        return new Promise((resolve) => {
            
            setTimeout(() => {
                const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
                resolve(randomQuote);
            }, 2000);
        });
    };

    const [quote, setquote] = useState({})
    const [loading, setloading] = useState(false)

    const FetchFunc = ()=>{
        setloading(true)
        fakeFetch().then((response) => {
            setquote(response)
            setloading(false)
        })
    }
    useEffect(() => {
        FetchFunc()
      }, []);
    return (
        <div>
            {loading ?  <p>Preparing new Quote...</p> :(<div><p><i>{quote.content}</i></p>
            <p><i>-{quote.author}</i></p></div>) }
            <button onClick={FetchFunc}>Generate Random Quote</button>
        </div>
    )
}

export default Quote5