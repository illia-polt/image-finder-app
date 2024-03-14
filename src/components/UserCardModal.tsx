import React from 'react';
import { Button, Image, Modal } from 'semantic-ui-react';
import { useImageFinderContext } from './ImageFinderContext/ImageFinderContext';

const UserCard = () => {
    const {
        name,
        surname,
        image,
        cardOpen,
        setCardOpen
    } = useImageFinderContext();

    const closeCard = () => setCardOpen(false);

  return (
    <Modal
        open={cardOpen}
        onClose={closeCard}
    >
        <Modal.Content className='modal-content' style={{ width: 600, height: 300, display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '14px', margin: '14px', padding: '14px'}}>
            <Image
                src={image?.urls?.regular || 'https://react.semantic-ui.com/images/wireframe/image.png'}
                alt={image?.altDescription}
                size='large'
                style={{maxHeight: 280}}
            />
            <section>
                <h3>{name}</h3>
                <h3>{surname}</h3>
            </section>
        </Modal.Content>
        <Modal.Actions>
            <Button color="teal" onClick={closeCard}>Close</Button>
        </Modal.Actions>
    </Modal>
  );
};

export default UserCard;