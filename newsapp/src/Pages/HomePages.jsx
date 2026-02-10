import React, { useEffect, useState } from 'react'
import NewsItem from '../Components/NewsItem'
import { useSearchParams } from 'react-router-dom'


export default function HomePages() {
    let [articles, setArticles] = useState([])
    let [totalResults, setTotalResults] = useState(0)

    let [q, setQ] = useState("")
    let [language, setLanguage] = useState("")
    let [searchParams] = useSearchParams()

    async function getAPIData(q, language) {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${q}&language=${language}&sortBy=publishedAt&apiKey=007699101fcf499d8532d0b338c0eb4a`)
        response = await response.json()
        if (response.status === "ok") {
            setArticles(response.articles)
            setTotalResults(response.totalResults)
        }
    }
    useEffect(() => {
        let q = searchParams.get("q") ?? "All"
        let language = searchParams.get("language") ?? "hi"
        setQ(q)
        setLanguage(language)
        getAPIData(q, language)}, [searchParams])
    return (
        <>
            <div className="container-fluid my-3"></div>
            <h5 className='text-center p-2 bg-primary text-light text-capitalize'>{q} News Articles</h5>
            <div className="row">
                {
                    articles.map((item, index) => {
                        return <NewsItem
                            key={index}
                            source={item.source?.name}
                            title={item.title}
                            description={item.description}
                            date={item.publishedAt}
                            pic={item.urlToImage}
                            url={item.url}

                        />
                    })
                }
            </div>
        </>
    )
}
