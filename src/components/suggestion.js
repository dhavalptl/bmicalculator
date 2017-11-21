import React from 'react';
import {Segment, Grid, Header} from 'semantic-ui-react';
const Suggestion = ({optimalLowWeight, optimalHighWeight}) => {
    const todayDate = (new Date()).toLocaleDateString();
    return optimalLowWeight && optimalHighWeight ? (
        <Segment>
            <Grid container columns={2} stackable >
                <Grid.Column width={10}>
                    <Header.Subheader className="result">Your suggested weight range is between {optimalLowWeight} - {optimalHighWeight} Kg.</Header.Subheader>
                </Grid.Column>
                <Grid.Column width={6} textAlign="right">
                    <Header.Subheader size='tiny' className="todayDate">{todayDate}</Header.Subheader>
                </Grid.Column>
            </Grid>
        </Segment>
    ) : '';
};

export default Suggestion;