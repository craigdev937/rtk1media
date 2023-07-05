import React from "react";
import "./FilmCard.css";
import { IFilmData } from "../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type FILM = {
    film: IFilmData
};

export const FilmCard = ({ film }: FILM) => {
    return (
        <React.Fragment>
            <aside className="film__card">
                <img 
                    className="film__image"
                    alt={film.title}
                    src={`${IMG}/${film.poster_path}`} 
                />
            </aside>
        </React.Fragment>
    );
};


