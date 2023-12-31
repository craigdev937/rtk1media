import React from "react";
import { MediaAPI } from "../global/MediaAPI";
import { TVCard } from "../components/TVCard";

export const TVShows = () => {
    const { error, isLoading, data } = 
        MediaAPI.useTvQuery();

    if (error) {
        if ("status" in error) {
            const errMSG = "error" in error ?
                error.error : 
                JSON.stringify(error.data);
            return <h1>Error: {errMSG}</h1>
        } else {
            return <h1>Error: {error.message}</h1>
        }
    };

    if (isLoading) return <h1>Loading...</h1>

    return (
        <React.Fragment>
            <h1>Media</h1>
            <section className="tv">
                {data && data.results.map((tv) => (
                    <TVCard 
                        key={tv.id} tv={tv} 
                    />
                ))}
            </section>
        </React.Fragment>
    );
};


