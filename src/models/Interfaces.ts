// For the Child Component
export interface ITVData {
    adult: boolean,
    backdrop_path: string,
    id: number,
    name: string,
    original_language: string,
    original_name: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    first_air_date: string,
    vote_average: number,
    release_date: string,
    origin_country: string[]
};

export interface ITV {
    page: number,
    results: {
        adult: boolean,
        backdrop_path: string,
        id: number,
        name: string,
        original_language: string,
        original_name: string,
        overview: string,
        poster_path: string,
        media_type: string,
        genre_ids: number[],
        popularity: number,
        first_air_date: string,
        vote_average: number,
        release_date: string,
        origin_country: string[]        
    }[],
    total_pages?: number,
    total_results?: number
};

// For Searching TV Shows
export interface ISearch {
    page: number,
    results: {
        adult: boolean,
        backdrop_path: string,
        genre_ids: number[],
        id: number,
        name: string,
        title: string,
        original_language: string,
        original_title: string,
        original_name: string,
        overview: string,
        popularity: number,
        poster_path: string,
        media_type: string,
        release_date: string,
        first_air_date: string,
        video: boolean,
        vote_average: number,
        vote_count: number,
        origin_country: string[]
    }[],
    total_pages: number,
    total_results: number
};

export interface ISearchData {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    name: string,
    title: string,
    original_language: string,
    original_title: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    media_type: string,
    release_date: string,
    first_air_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    origin_country: string[]
}

export interface IFilmData {
    adult: boolean,
    backdrop_path: string,
    id: number,
    title: string,
    original_language: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    genre_ids: number[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
};

export interface IFilm {
    page: number,
    results: {
        adult: boolean,
        backdrop_path: string,
        id: number,
        title: string,
        original_language: string,
        original_title: string,
        overview: string,
        poster_path: string,
        media_type: string,
        genre_ids: number[],
        popularity: number,
        release_date: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }[],
    total_pages?: number,
    total_results?: number
};


