import { useImageFinderContext } from "./ImageFinderContext/ImageFinderContext"
import { Button, Image, Loader, Segment } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

export const ImagePresenter = () => {
    const { page, totalPages, image, loading, setPage, errorMsg, setCardOpen } = useImageFinderContext();
console.log(useImageFinderContext());
const navigate = useNavigate();

    return (
        <Segment size='mini'>
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            <Loader active={loading}>Loading</Loader>
            <Image
                src={image?.urls?.regular || 'https://react.semantic-ui.com/images/wireframe/image.png'}
                alt={image?.altDescription}
                size="huge"
                centered
            />
            <div className='buttons-container'>
                <Button color="teal" onClick={() => navigate('/card')}>Accept</Button>
                <Button color="red" disabled={page === totalPages} onClick={() => navigate('/')}>Reject</Button>
            </div>
        </Segment>
    );
}