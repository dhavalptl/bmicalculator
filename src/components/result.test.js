import React from 'react';
import { mount } from 'enzyme';
import Result from './result';
 
describe.only('Test for <Result /> component', () => {
    let wrapper;
    beforeEach(() => {
        if(wrapper){
            wrapper.unmount();
        }
    });

    it('default output', () => {
        wrapper = mount(<Result bmi={'--,--'} description={''}/>);
        expect(wrapper.find('Header')).toHaveLength(2);
        expect(wrapper.find('Header').first().text()).toEqual('--,--');
        expect(wrapper.find('Header').last().text()).toEqual(' BMI');
    })

    it('Check bmi and description', () => {
        wrapper = mount(<Result bmi={26} description={'Overweight'}/>);
        expect(wrapper.find('Header').first().text()).toEqual('26');
        expect(wrapper.find('Header').last().text()).toEqual('Overweight BMI');
    })
});