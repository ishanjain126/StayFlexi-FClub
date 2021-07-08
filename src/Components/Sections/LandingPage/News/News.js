import React from 'react'
import NewsCard from '../../../Helper/NewsCard'
import NewsList from "../News/NewsList.json"

function News() {

    const newsData = NewsList.NewsList
    console.log("newsData", newsData)

    return (
        <div className="newsWrapper" id="news">
            <div className="newsSectionHeading">
                Latest News
            </div>
            <div className="news">
                {newsData.map((item, index) => {
                    return(
                        <NewsCard 
                        key={index}
                        img={item.news_banner}
                        heading={item.news_headline}
                        newsContent={item.news}
                        time={item.time}
                        authorName={item.publisherName}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default News
