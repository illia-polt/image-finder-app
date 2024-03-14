import { useAppContext } from "./AppContext/AppContext"
import { Button, Image, Segment, Loader } from "semantic-ui-react";
import { useNavigate } from 'react-router-dom';

export const ImagePresenter = () => {
    const {
        page,
        totalPages,
        image,
        errorMsg,
        loading
    } = useAppContext();
    const navigate = useNavigate();

    return (
        <Segment size='mini'>
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            <Loader active={loading}>Loading</Loader>
            <Image
                src={image?.urls?.full || 'https://react.semantic-ui.com/images/wireframe/image.png'}
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