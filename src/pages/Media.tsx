import React from "react";
import { MediaAPI } from "../global/MediaAPI";
import { MediaCard } from "../components/MediaCard";

export const Media = () => {
    const [input, setInput] = React.useState("");
    const { error, isLoading, data } = 
        MediaAPI.useSearchQuery(input);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

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

    return (
        <React.Fragment>
            <h1>Search</h1>
            <input type="text" onChange={handleChange} />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <section className="media">
                {data && data.results.map((media) => (
                    <MediaCard key={media.id} media={media} />
                ))}
            </section>
            )}
        </React.Fragment>
    );
};


