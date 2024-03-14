import React, { memo } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, Segment, Input, Dropdown, Button } from 'semantic-ui-react';

import { useAppContext } from '../../components/AppContext/AppContext';


const topics = [
  { key: 'travel', text: 'Travel', value: 'Travel' },
  { key: 'cars', text: 'Cars', value: 'Cars' },
  { key: 'wildlife', text: 'Wildlife', value: 'Wildlife' },
  { key: 'technology', text: 'Technology', value: 'Technology' },
  { key: 'other', text: 'Other', value: 'Other' },
];

const UserForm = () => {
  const {
    name,
    surname,
    topic,
    otherTopic,
    setName,
    setSurname,
    handleTopicChange,
    setOtherTopic,
    resetSearch,
    searchTopic,
  } = useAppContext();
  const navigate = useNavigate();

  const onSearch = () => {
    resetSearch();
    navigate('/picker');
  }

  const disableButton =  name.length < 3 || surname.length < 3 || !searchTopic;

  return (
    <Segment raised size='huge' >
      <h1>Image Finder</h1>
      <Form>
        <Form.Field required>
          <label>Name</label>
          <Input
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
        </Form.Field>
        <Form.Field required>
          <label>Surname</label>
          <Input
            name="surname"
            placeholder="Enter your surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Field>
        <Form.Field required>
          <label>Preferred Topic</label>
          <Dropdown
            placeholder="Select Topic"
            fluid
            selection
            options={topics}
            value={topic}
            onChange={handleTopicChange}
          />
        </Form.Field>
        {topic === 'Other' && (
          <Form.Field >
            <label>Other Topic</label>
            <Input
              type='search'
              name="otherTopic"
              placeholder="Enter other topic"
              value={otherTopic}
              onChange={(e) => setOtherTopic(e.target.value)}
          />
          </Form.Field>
        )}
        <div className='buttons-container'>
          <Button color='teal' onClick={onSearch} disabled={disableButton}>Search</Button>
        </div>
      </Form>
    </Segment>
  );
};

export default memo(UserForm);
