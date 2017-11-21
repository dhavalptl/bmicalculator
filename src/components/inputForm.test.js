import React from 'react';
import { mount } from 'enzyme';
import InputForm from './inputForm';
 
describe.only('Test for <InputForm /> component', () => {
    let wrapper;
    beforeEach(() => {
        if(wrapper){
            wrapper.unmount();
        }
    });

    it('form have 2 input weight and height', () => {
        wrapper = mount(<InputForm/>);
        expect(wrapper.find('Input')).toHaveLength(2);
    })

    it('set weight using state', () => {
        wrapper = mount(<InputForm/>);
        wrapper.setState({
            weight: 91
        });
        expect(wrapper.find('Input.weight').props().value).toBe(91);
    })

    it('set height using state', () => {
        wrapper = mount(<InputForm/>);
        wrapper.setState({
            height: 171
        });
        expect(wrapper.find('Input.height').props().value).toBe(171);
    })
});