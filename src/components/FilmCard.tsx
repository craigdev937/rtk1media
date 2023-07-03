import React from "react";
import "./MediaCard.css";
import { IFilmData } from "../models/Interfaces";
const IMG = "https://image.tmdb.org/t/p/w500";

type FILM = {
    film: IFilmData
};

export const FilmCard = ({ film }: FILM) => {
    return (
        <React.Fragment>
            <section>
                <h1>{film.title}</h1>
                <p>{film.overview}</p>
                <img 
                    alt={film.title}
                    src={`${IMG}/${film.backdrop_path}`} 
                />
            </section>
        </React.Fragment>
    );
};


