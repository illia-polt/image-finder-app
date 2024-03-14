import axios from 'axios';

const IMAGES_PER_PAGE = 1;

type getImagesProps = {
    query: string,
    page: number,
}
export type ImageResponse = {
    results: any[];
    total: number;
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
