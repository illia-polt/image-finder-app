import { SyntheticEvent, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ContextValue, ProviderProps } from './types';
import { DropdownProps } from 'semantic-ui-react';
import { getImages } from '../../api/getImages';

const initialValue: ContextValue = {
	setName: _ => {},
	setSurname: _ => {},
	handleTopicChange: _ => {},
	handleSearch: _ => {},
	setOtherTopic: _ => {},
	setPage: _ => {},
	setTotalPages: _ => {},
	setCardOpen: _ => {},
	name: '',
	surname: '',
	topic: '',
	otherTopic: '',
	page: 1,
	totalPages: 0,
	image: {
		altDescription: '',
		urls : {
			full: '',
			regular: '',
			small: '',
		}
	},
    errorMsg: '',
    loading: false,
    cardOpen: false,
};

export const ImageFinderContext = createContext<ContextValue>(initialValue);

export const ImageFinderProvider = ({ ...props }: ProviderProps) => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [topic, setTopic] = useState('');
	const [otherTopic, setOtherTopic] = useState('');
	const  searchTopic = topic === 'Other' ? otherTopic : topic;

	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
    const [image, setImage] = useState<any>(null);
	const [errorMsg, setErrorMsg] = useState('');
  	const [loading, setLoading] = useState(false);

  	const [cardOpen, setCardOpen] = useState(false);

	const fetchImages = useCallback(() => {
		try {
			console.log(searchTopic);
			
		  if (searchTopic) {
			setErrorMsg('');
			setLoading(true);
			getImages({query: searchTopic, page})
				.then(({data}: any) => {
					console.log({data});
					setImage(data.results[0]);
					setTotalPages(data.total_pages);
				});
			setLoading(false);
		  }
		} catch (error) {
		  setErrorMsg('Somethind went wrong! Please try again later.');
		  console.log(error);
		  setLoading(false);
		}
	  }, [page, searchTopic]);

	const resetSearch = useCallback(() => {
		setPage(1);
		fetchImages();
	}, [fetchImages]);

	const handleTopicChange = useCallback((_event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		setTopic(data.value as string);
		setOtherTopic('');
		resetSearch();
	}, [resetSearch]);

	const handleSearch = useCallback((event: SyntheticEvent<HTMLElement, Event>) => {
		event.preventDefault();
		resetSearch();
	}, [resetSearch]);

	useEffect(() => {
		fetchImages();
	}, [fetchImages]);

	const ctxValue = useMemo(
		() => ({
			name,
			surname,
			topic,
			otherTopic,
			page,
			totalPages,
			image,
			errorMsg,
			loading,
			cardOpen,
			setName,
			setSurname,
			handleTopicChange,
			handleSearch,
			setOtherTopic,
			setPage,
			setTotalPages,
			setCardOpen
		}),
		[name, surname, topic, otherTopic, page, totalPages, image, errorMsg, loading, cardOpen, handleTopicChange, handleSearch],
	);

return <ImageFinderContext.Provider value={ctxValue} {...props} />;
};

export const useImageFinderContext = () => {
	const ctx = useContext(ImageFinderContext);
	if (!ctx) throw new Error('useImageFinderContext must be used within a ContextProvider');

	return ctx;
};
