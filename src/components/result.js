import React from 'react';
import {Segment, Header} from 'semantic-ui-react';
const Result = ({bmi, description}) => {
    return (
        <Segment>
            <Header size='huge' textAlign='center'>{bmi}</Header>
            <Header size='small' textAlign='center'>{description} BMI</Header>
        </Segment>
    );
};

export default Result;