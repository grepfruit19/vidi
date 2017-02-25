import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';

//This class handles creation of new routines.
class NewRoutine extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: 2,
      right: 10,
      cards: []
    };
    this.addCard = this.addCard.bind(this);
  }
  addCard(){
    let temp = this.state.cards.slice();
    temp.push(<NewCard/>);
    this.setState({cards: temp});
  }
  render() {
    return(
      <form className="login">
        <h2>Create New Routine</h2>
        <FormGroup controlId="formTitle">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Title
          </Col>
          <Col sm={10}>
            <FormControl type="title" placeholder="Routine Title" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formTimePeriod">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Time Period
          </Col>
          <Col sm={10}>
            <FormControl type="timePeriod" placeholder="Duration (In Weeks)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formDescription">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl maxLength={160} type="description" placeholder="Description (Max 160 chars)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="oneliner">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            One Liner
          </Col>
          <Col sm={this.state.right}>
            <FormControl type="oneliner" />
          </Col>
        </FormGroup>
        {this.state.cards}
        <Button onClick={this.addCard} bsStyle="primary">Add Card</Button><br/>
        <Button bsStyle="primary">Submit</Button>
      </form>
    )
  }
}

class NewCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: 2,
      right: 10
    };
  }
  render() {
    return(
      <form className="innerForm">
        <h2>Create New Card</h2>
        <FormGroup controlId="formTitle">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Title
          </Col>
          <Col sm={this.state.right}>
            <FormControl type="title" placeholder="Card Title" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formDescription">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl maxLength={160} type="description" placeholder="Description (Max 160 chars)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formDays">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Days
          </Col>
          <Col sm={10}>
            <FormControl type="days" placeholder="Input as list of numbers separated by commas (no spaces)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formDuration">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Duration
          </Col>
          <Col sm={10}>
            <FormControl type="duration" placeholder="Duration (As Integer)"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="formVideoUrl">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Video URL
          </Col>
          <Col sm={10}>
            <FormControl type="videoUrl" placeholder="Video URL"/>
          </Col>
        </FormGroup>
      </form>
  )
  }
}

export default NewRoutine;
