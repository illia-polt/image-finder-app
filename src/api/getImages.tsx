import axios from 'axios';

const IMAGES_PER_PAGE = 1;

type getImagesProps = {
    query: string,
    page: number,
}

export type Image = {
    id: string,
    alt_description: string,
    urls: {
        full: string,
        raw: string,
        regular: string,
        small: string,
    },
    created_at: string,
    slug: string,
}

export type ImageResponse = {
    results: Image[];
    total: number;
    total_pages: number;
}

export const getImages = async ({query, page}: getImagesProps) => {
    try {
        return await axios.get<ImageResponse>(
            `${process.env.REACT_APP_API_URL}/?query=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${process.env.REACT_APP_API_KEY}`
        )
    } catch (error) {
        console.log(error);      
    }
};
