import React from 'react'

function StatsCard({skillName, skillStats}) {
    return (
        <div className="statsCardWrapper">
            <div className="skillName">
                {skillName}
            </div>
            <div className="skillRating">
                {skillStats}
            </div>
        </div>
    )
}

export default StatsCard
