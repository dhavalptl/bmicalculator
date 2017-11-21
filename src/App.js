import React, { Component } from 'react';
import './App.css';

import InputForm from './components/inputForm';
import Result from './components/result';
import Suggestion from './components/suggestion';
import {Container, Segment, Header} from 'semantic-ui-react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: {
        bmi: '--.--',
        description: '',
        optimalLowWeight: '',
        optimalHighWeight: ''
      }
    }
  }
  onResult = (bmiResult) => {
    this.setState({...this.state, result: bmiResult});
  }
  render() {
    const {bmi, description, optimalLowWeight, optimalHighWeight} = this.state.result;
    return (
      <Container text className='app'>
        <Segment.Group>
          <Segment>
              <Header size='large' textAlign='center'>BMI Calculator</Header>
          </Segment>
          <InputForm onCalculateResult={this.onResult}/>
          <Result bmi={bmi} description={description}/>
          <Suggestion optimalLowWeight={optimalLowWeight} optimalHighWeight={optimalHighWeight}/>
        </Segment.Group>
      </Container>
    );
  }
}

export default App;
