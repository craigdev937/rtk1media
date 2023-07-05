import React from "react";
import "./TVCard.css";
import { ITVData } from "../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type TVS = {
    tv: ITVData
};

export const TVCard = ({ tv }: TVS) => {
    return (
        <React.Fragment>
            <section>
                <img 
                    className="tv__image"
                    alt={tv.name}
                    src={`${IMG}/${tv.poster_path}`} 
                />
            </section>
        </React.Fragment>
    );
};


