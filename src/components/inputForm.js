import React, { Component } from 'react';
import {Segment, Grid, Input} from 'semantic-ui-react';
import {calculate} from 'healthcalcutil';
class InputForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            weight: '',
            height: ''
        }
    }
    onWeightChange = (event, value) => {
        const weightVal = event.target.value;
        this.setState({
            weight: weightVal < 0 ? '' : weightVal
        });
        this.calculateBMI(weightVal, this.state.height);
    }
    onHeightChange = (event, value) => {
        const heightVal = event.target.value;
        this.setState({
            height: heightVal < 0 ? '' : heightVal
        });
        this.calculateBMI(this.state.weight, heightVal);
    }
    calculateBMI = (weight, height) => {
        if(weight > 0 && height > 50){
            calculate(weight, height).then(result => {
                this.props.onCalculateResult(result);
            });
        } 
    }
    render() {
        const {weight, height} = this.state;
        return (
            <Segment> 
                <Grid container columns={2} stackable >
                    <Grid.Column>
                        <Input className="weight" label={{ basic: true, content: 'kg' }} labelPosition='right' placeholder='Weight' value={weight} onChange={this.onWeightChange}/>
                    </Grid.Column>
                    <Grid.Column>
                        <Input className="height" label={{ basic: true, content: 'cm' }} labelPosition='right' placeholder='Height' value={height} onChange={this.onHeightChange}/>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default InputForm;