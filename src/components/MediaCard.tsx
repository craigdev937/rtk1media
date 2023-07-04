import React from "react";
import "./MediaCard.css";
import { ISearchData } from "../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type SEA = {
    media: ISearchData
};

export const MediaCard = ({ media }: SEA) => {
    return (
        <React.Fragment>
            <h1>
                {media.name} || 
                {media.title}
            </h1>
            <img 
                alt={media.name} 
                src={`${IMG}/${media.poster_path}`} 
            />
            <p>{media.overview}</p>
        </React.Fragment>
    );
};


