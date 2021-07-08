import React, {useState, useEffect, useRef} from 'react'
import {absoluteURL} from "../../Utils/index"
import Button_1 from "../Helper/Button_1"
import * as FiIcons from "react-icons/fi";
import * as BsIcons from "react-icons/bs";
import { useDrag, useDrop } from 'react-dnd';
import {ItemTypes} from "../../Utils/index";


// Defining the entire logic for drag and drop

function PlayerCard({
    clsName,
    playerImage, 
    playerName, 
    currentClub,
    playerAge,
    position,
    debutYear,
    previousClub,
    totalGoals,
    totalAssists,
    totalFreekicks,
    id, 
    index,
    moveCard
}) {

    const ref = useRef(null)
    const [{handlerId}, drop] = useDrop({
      accept:ItemTypes.CARD,
      collect(monitor){
          return {
              handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor){
            if(!ref.current){
                return ;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            // doesn't replace item with themselves
            if(dragIndex === hoverIndex){
                return ;
            }

            // determining the rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // determining the mouse position
            const clientOffset = monitor.getClientOffset();
            // get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // only performs the move when the mouse has crossed half of the items height
            // when dragging downwards only move when the cursor is below 50%
            // when dragging upwards inly move when the cursor is above 50%

            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action 
            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex;

        }  
    })

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));

    return (
        <div ref={ref} className={clsName} style={{opacity}} data-handler-id = {handlerId}>
            <div className="playerInfoWrapper">
                <div className="playerImage">
                    <img src={absoluteURL(`./${playerImage}`)} alt="" className="playerImg" /> 
                </div>
                <div className="playerInformation">
                    <div className="nameClub">
                        <div className="playerName">
                            {playerName}
                        </div>
                        <div className="currentClub">
                            ({currentClub})
                        </div>
                    </div>
                    <div className="age">
                        {playerAge}
                    </div>
                    <div className="position">
                        <div className="heading">
                            Position :
                        </div>
                        <div className="value">
                            {position}
                        </div>
                    </div>
                    <div className="debutYear">
                        <div className="heading">
                            Debut Year : 
                        </div>
                        <div className="value">
                            {debutYear}
                        </div>
                    </div>
                    <div className="previousClub">
                        <div className="heading">
                            Previous Club :
                        </div>
                        <div className="value">
                            {previousClub}
                        </div>
                    </div>
                    <div className="achievements">
                        <div className="total_goals">
                            <div className="heading">
                                Total Goals
                            </div>
                            <div className="value">
                                {totalGoals}
                            </div>
                        </div>
                        <div className="total_assists">
                            <div className="heading">
                                Total Assists
                            </div>
                            <div className="value">
                                {totalAssists}
                            </div>
                        </div>
                        <div className="total_freekicks">
                            <div className="heading">
                                Total Freekicks
                            </div>
                            <div className="value">
                                {totalFreekicks}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerCard
