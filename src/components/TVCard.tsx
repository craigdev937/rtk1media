import React from "react";
import "./MediaCard.css";
import { ITVData } from "../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type TVS = {
    tv: ITVData
};

export const TVCard = ({ tv }: TVS) => {
    return (
        <React.Fragment>
            <section>
                <h1>{tv.name}</h1>
                <p>{tv.overview}</p>
                <img 
                    alt={tv.name}
                    src={`${IMG}/${tv.poster_path}`} 
                />
            </section>
        </React.Fragment>
    );
};


