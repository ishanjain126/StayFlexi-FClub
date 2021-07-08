import React, {useState, useEffect, useCallback} from 'react'
import SideBar from '../Sections/WebApp/Sidebar'
import PlayerCard from '../Helper/PlayerCard'
import PlayerList from "../Sections/WebApp/Dashboard/PlayerList.json"
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import {useDrag, useDrop} from "react-dnd";
import update from "immutability-helper";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// Here displaying the player's information.

function Dashboard() {

    const data = PlayerList.PlayerList;

    const [playerData, setPlayerData] = useState(() => data)
    console.log(data);

    const [clsName, setClsName] = useState("tableForm")
    const [toggle, setToggle] = useState(true)
    const [icon, setIcon] = useState(<BsIcons.BsViewList size="30px" />)
    const [typeWrapper, setTypeWrapper] = useState("tableWrapper")

    // Implementing the toggle functionality from table view to card view. Default is set to table view
    function onToggle(){
        setToggle(toggle => !toggle)
    }

    useEffect(() => {
        {toggle ? setTypeWrapper("tableWrapper") : setTypeWrapper("cardWrapper")}
    }, [toggle])

    useEffect(() => {
        {typeWrapper === "tableWrapper" ? setIcon(<BsIcons.BsViewList size="30px" />) : <FiIcons.FiGrid size="30px" />}
    }, [])

    useEffect(() => {
        {toggle ? setClsName("tableForm") :  setClsName("cardForm")}
    }, [toggle])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = playerData[dragIndex];
        setPlayerData(update(playerData, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [playerData]);

    // rendering all of the information here. Also, defining this card as the move card, hence implementing the functionaliy of drag and drop. 
    const renderPlayerCard = (playerData, index) => {
        return(
            <PlayerCard 
            key={playerData.id}
            id={playerData.id}
            index={index}
            clsName={clsName}
            playerImage={playerData.pic}
            playerName={playerData.name}
            currentClub={playerData.current_club}
            playerAge={playerData.age}
            position={playerData.position}
            debutYear={playerData.debut_year}
            previousClub={playerData.previous_club}
            totalGoals={playerData.total_goals}
            totalAssists={playerData.total_assists}
            totalFreekicks={playerData.total_freekicks}
            moveCard={moveCard}
            />
        )
    }

    console.log("class Name", clsName)

    return (
        <div>
            <DndProvider backend={HTML5Backend}> 
            <SideBar
            text=
            {
                <>
                {/* <DndProvider backend={HTML5Backend}> */}
                <div className="dashboardWrapper">
                    <div className="viewType" onClick={onToggle}>
                        {typeWrapper === "tableWrapper" ? <BsIcons.BsViewList size="30px" /> : <FiIcons.FiGrid size="30px" />}
                    </div>
                    <div className={typeWrapper}>
                        {playerData.map((item, index) => 
                            renderPlayerCard(item, index) )
                            // return(
                                // <PlayerCard 
                                // {...playerData}
                                // clsName={clsName}
                                // playerImage={item.pic}
                                // playerName={item.name}
                                // currentClub={item.current_club}
                                // playerAge={item.age}
                                // position={item.position}
                                // debutYear={item.debut_year}
                                // previousClub={item.previous_club}
                                // totalGoals={item.total_goals}
                                // totalAssists={item.total_assists}
                                // totalFreekicks={item.total_freekicks}
                                // />
                            // )
                        }
                    </div>
                </div>
                {/* </DndProvider> */}
                </>
            }
            />
            </DndProvider>
        </div>
    )
}

export default Dashboard
