import React from 'react';
import { shallow, mount } from 'enzyme';
import Suggestion from './suggestion';
 
describe.only('Test for <Suggestion /> component', () => {
    let wrapper;
    beforeEach(() => {
        if(wrapper){
            wrapper.unmount();
        }
    });

    it('No Suggestion if no low and high weight', () => {
        wrapper = mount(<Suggestion optimalLowWeight={''} optimalHighWeight={''}/>);
        expect(wrapper.find('HeaderSubheader')).toHaveLength(0);
    })

    it('Suggestion component have two header', () => {
       wrapper = mount(<Suggestion optimalLowWeight={52} optimalHighWeight={74}/>);
        expect(wrapper.find('HeaderSubheader')).toHaveLength(2);
    })

    it('Suggestion first header have suggestion text', () => {
        wrapper = mount(<Suggestion optimalLowWeight={52} optimalHighWeight={74}/>);
        expect(wrapper.find('HeaderSubheader').filter({className: 'result'}).text()).toEqual('Your suggested weight range is between 52 - 74 Kg.');
    })

    it('Suggestion second header have today date', () => {
        wrapper = mount(<Suggestion optimalLowWeight={52} optimalHighWeight={74}/>);
        const todayDateStr = (new Date()).toLocaleDateString();
        expect(wrapper.find('HeaderSubheader').filter({className: 'todayDate'}).text()).toEqual(todayDateStr);
    })    
});