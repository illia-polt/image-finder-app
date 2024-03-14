import { ReactNode, SyntheticEvent } from "react";
import { DropdownProps } from "semantic-ui-react";

export type Image = {
    altDescription: string;
    urls : {
        full: string;
        regular: string;
        small: string;
    }
}

export type ContextValue = {
    name: string;
    surname: string;
    topic: string;
    otherTopic: string;
    page: number;
    totalPages: number;
    image: Image;
    errorMsg: string;
    searchTopic: string;
    loading: boolean;
    resetSearch: () => void;
    setName: (value: string) => void;
    setSurname: (value: string) => void;
    handleTopicChange: (e: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void;
    setOtherTopic: (value: string) => void;
    setPage: (value: number) => void;
    setTotalPages: (value: number) => void;
};

export type ProviderProps = {
    children: ReactNode;
};