import { memo } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Image, Segment, Loader } from "semantic-ui-react";

import { useAppContext } from "../../components/AppContext/AppContext"

const ImagePresenter = () => {
    const {
        page,
        totalPages,
        image,
        errorMsg,
        loading
    } = useAppContext();
    const navigate = useNavigate();
    console.log({loading});

    return (
        <Segment size='mini'>
            {errorMsg && <p className="error-message">{errorMsg}</p>}
            <Loader active={loading}>Loading</Loader>
            <Image
                src={image?.urls?.full}
                alt={image?.alt_description}
                className="placeholder"
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

export default memo(ImagePresenter);
