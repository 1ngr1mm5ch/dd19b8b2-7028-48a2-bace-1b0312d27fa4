/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Event } from "../types";

const EventTile: React.FC<{eventDetails: Event, onClickHandler: (id:string) => void}> = ({eventDetails, onClickHandler}) => {
    return (
        <div className="event">
            <div className="event-container">
                <div className="title">
                    <div className="image-container">
                        <div className="image"></div>
                    </div>
                    <div className="name">
                        <span className="bold">{eventDetails.title}</span>
                    </div>
                </div>
                <div className="main-image-container">
                    <img className="main-image" src={eventDetails.imageUrl} alt={eventDetails.title}></img>
                </div>
                <div className="information">
                    <div className="details">
                        <div className="location">
                            <span className="logo"></span>
                            <a href={eventDetails.location} target="_blank" className="location-name">{eventDetails.locationName}</a>
                        </div>
                        <span className="start">Starts: {eventDetails.start.toUTCString()}</span>
                        <span className="end">End: {eventDetails.end.toUTCString()}</span>
                    </div>
                    <div className="button-container">
                        <button className="add-button" onClick={()=>onClickHandler(eventDetails.id)}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventTile;