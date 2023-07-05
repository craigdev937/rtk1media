import React from "react";
import "./MediaCard.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { ISearchData } from "../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type SEA = {
    media: ISearchData
};

export const MediaCard = ({ media }: SEA) => {
    return (
        <React.Fragment>
            <aside>
                <img 
                    className="media__image"
                    alt={media.name} 
                    src={`${IMG}/${media.poster_path}`} 
                />
                <p><FaStar /> {media.vote_average}</p>
                <Link to={`/info/${media.id}`}>Info</Link>
            </aside>
        </React.Fragment>
    );
};


