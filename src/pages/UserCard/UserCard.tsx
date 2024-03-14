import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react';

import { useAppContext } from '../../components/AppContext/AppContext';


const UserCard = () => {
    const {
        name,
        surname,
        image,
    } = useAppContext();
    const navigate = useNavigate();
    
    return (
        <Card className='user-card' style={{ width: 600, height: 300, display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '14px', margin: '14px', padding: '14px'}}>
            <Image
                src={image?.urls?.regular || 'https://react.semantic-ui.com/images/wireframe/image.png'}
                alt={image?.alt_description}
                size='large'
                style={{maxHeight: 280}}
            />
            <section>
                <Button color="teal" onClick={() => navigate('/picker')}>Back</Button>
                <h3>{name}</h3>
                <h3>{surname}</h3>
            </section>
        </Card>
    );
};

export default memo(UserCard);