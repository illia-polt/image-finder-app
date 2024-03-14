import { SyntheticEvent, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { ContextValue, ProviderProps } from './types';
import { DropdownProps } from 'semantic-ui-react';
import { getImages } from '../../api/getImages';

const initialValue: ContextValue = {
	setName: _ => {},
	setSurname: _ => {},
	handleTopicChange: _ => {},
	setOtherTopic: _ => {},
	setPage: _ => {},
	setTotalPages: _ => {},
	resetSearch: () => {},
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
	searchTopic: '',
	loading: false,
};

export const AppContext = createContext<ContextValue>(initialValue);

export const AppProvider = ({ ...props }: ProviderProps) => {
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

	const fetchImages = useCallback(() => {
		try {
		  if (searchTopic) {
			setLoading(true);
			setImage({});
			setErrorMsg('');
			getImages({query: searchTopic, page})
				.then(({data}: any) => {
					setImage(data.results[0]);
					setTotalPages(data.total_pages);
				});
			setLoading(false);
		  }
		} catch (error) {
		  setErrorMsg('Somethind went wrong! Please try again later.');
		  console.log(error);
		}
	  }, [page, searchTopic]);

	const resetSearch = useCallback(() => {
		setPage(1);
		fetchImages();
	}, [fetchImages]);

	const handleTopicChange = useCallback((_event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		setTopic(data.value as string);
		setOtherTopic('');
	}, []);

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
			searchTopic,
			loading,
			setName,
			setSurname,
			handleTopicChange,
			setOtherTopic,
			setPage,
			setTotalPages,
			resetSearch
		}),
		[name, surname, topic, otherTopic, page, totalPages, image, errorMsg, searchTopic, loading, handleTopicChange, resetSearch],
	);

return <AppContext.Provider value={ctxValue} {...props} />;
};

export const useAppContext = () => {
	const ctx = useContext(AppContext);
	if (!ctx) throw new Error('useAppContext must be used within a ContextProvider');

	return ctx;
};
