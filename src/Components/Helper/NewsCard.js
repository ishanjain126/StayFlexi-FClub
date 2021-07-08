import React from 'react'
import {absoluteURL} from "../../Utils/index";


// A template for news information displayed on the landing page. 

function NewsCard({img, heading, newsContent, time, authorName}) {
    return (
        <div className="newsCardWrapper">
            <div className="newsBanner">
                <img src={absoluteURL(`./${img}`)} alt="" className="bannerImg" />
            </div>
            <div className="newsInformation">
                <div className="newsHeading">
                    {heading}
                </div>
                <div className="timeAuthor">
                    <div className="time">
                        {time} | 
                    </div>
                    <div className="authorName">
                        {authorName}
                    </div>
                </div>
                <div className="newsContent">
                    {newsContent}
                </div>

            </div>
        </div>
    )
}

export default NewsCard
