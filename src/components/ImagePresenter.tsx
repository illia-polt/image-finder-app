import { useImageFinderContext } from "./ImageFinderContext/ImageFinderContext"
import { Button, Image, Loader, Segment } from "semantic-ui-react";


export const ImagePresenter = () => {
    const { page, totalPages, image, loading, setPage, errorMsg, setCardOpen } = useImageFinderContext();

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
                <Button color="teal" onClick={() => setCardOpen(true)}>Accept</Button>
                <Button color="red" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Reject</Button>
            </div>
        </Segment>
    );
}