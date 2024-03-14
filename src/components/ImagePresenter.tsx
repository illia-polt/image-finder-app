import { useImageFinderContext } from "./ImageFinderContext/ImageFinderContext"
import { Button, Image, Loader, Segment } from "semantic-ui-react";


export const ImagePresenter = () => {
    const { page, totalPages, image, loading, setPage } = useImageFinderContext();

    return (
        <Segment size='mini'>
            <Loader active={loading}>Loading</Loader>
            <Image
                src={image?.urls?.regular || 'https://react.semantic-ui.com/images/wireframe/image.png'}
                alt={image?.altDescription}
                fluid
                // style={{ maxWidth: '40%', maxHeight: '40%' }}
            />
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', margin: '10px'}}>
                <Button color="teal" onClick={() => {}}>Accept</Button>
                <Button color="red" disabled={page === totalPages} onClick={() => setPage(page + 1)}>Reject</Button>
            </div>
        </Segment>
    );
}