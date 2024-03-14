import React, { useRef, useState } from 'react';
import { Form, Segment, Input, Button, Dropdown } from 'semantic-ui-react';
import { useImageFinderContext } from './ImageFinderContext/ImageFinderContext';
import debounce from 'lodash/debounce';

// interface TopicOption {
//   key: string;
//   text: string;
//   value: string;
// }

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
  } = useImageFinderContext();

  console.log(useImageFinderContext());



  // const handleInputChange = (event, option { name, value }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;
  //     case 'surname':
  //       setSurname(value);
  //       break;
  //     case 'topic':
  //       setTopic({ name, value });
  //       setOtherTopic(''); // Clear otherTopic when topic changes
  //       break;
  //     case 'otherTopic':
  //       setOtherTopic({ name, value });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleTopicChange = (event, data) => {
  //   console.log(data);
  //   setTopic(data.value);
  // };

  return (
    <Segment raised size='large'>
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
      </Form>
    </Segment>
  );
};

export default UserForm;
