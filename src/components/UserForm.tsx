import React from 'react';
import { Form, Segment, Input, Dropdown, Button } from 'semantic-ui-react';
import { useImageFinderContext } from './ImageFinderContext/ImageFinderContext';

import { Navigate, useNavigate } from "react-router-dom";

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
    handleSearch,
    searchTopic,
  } = useImageFinderContext();
  const navigate = useNavigate();
  console.log(useImageFinderContext());

  // if (searchTopic) return <Navigate to="picker" replace/>
  const onSearch = () => {
    navigate('/picker');
  }
  return (
    <Segment raised size='huge' >
      <h1>Image Finder</h1>
      <Form onSubmit={handleSearch}>
        <Form.Field>
          <label>Name</label>
          <Input
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Surname</label>
          <Input
            name="surname"
            placeholder="Enter your surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
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
        <Button type="submit" color='teal' onClick={onSearch} disabled={!searchTopic}>Search</Button>
      </Form>
    </Segment>
  );
};

export default UserForm;
