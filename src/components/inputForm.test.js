import React from 'react';
import { shallow } from 'enzyme';
import InputForm from './inputForm';

it('renders input form component without crashing', () => {
    shallow(<InputForm/>);
})