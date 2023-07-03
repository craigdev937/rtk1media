import React from "react";
import { MediaAPI } from "../global/MediaAPI";
import { MediaCard } from "../components/MediaCard";

export const Media = () => {
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
            <section className="media">
                {/* {data && data.results.map((media) => (
                    
                ))} */}
            </section>
        </React.Fragment>
    );
};


