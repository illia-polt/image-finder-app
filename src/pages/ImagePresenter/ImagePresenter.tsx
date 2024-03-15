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

    return (
        <Segment size='mini' aria-live="polite">
            {errorMsg && <p className="error-message" aria-live="assertive">{errorMsg}</p>}
            <Loader active={loading} aria-label="Image loading">Loading</Loader>
            <Image
                src={image?.urls?.full}
                alt={image?.alt_description || "Presented Image"}
                className="placeholder"
                size="huge"
                centered
            />
            <div className='buttons-container'>
                <Button
                    color="violet"
                    aria-label="Accept image"
                    onClick={() => navigate('/card')}
                >
                    Accept
                </Button>
                <Button
                    color="red"
                    aria-label="Reject image"
                    disabled={page === totalPages}
                    onClick={() => navigate('/')}
                >
                    Reject
                </Button>
            </div>
        </Segment>
    );
}

export default memo(ImagePresenter);
