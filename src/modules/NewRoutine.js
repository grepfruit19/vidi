import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';

class NewRoutineContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      left: 2,
      right: 10,
      cards: [],
      routineTitle: '',
      routineTimePeriod: '',
      routineDescription: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //Ensures all form data is stored in state.
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render(){
    return(
      <NewRoutine
        left={this.state.left}
        right={this.state.right}
        title={this.state.routineTitle}
        timePeriod={this.state.routineTimePeriod}
        description={this.state.routineDescription}
        onChange={this.handleInputChange}/>
    )
  }
}

//This class handles creation of new routines.
class NewRoutine extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  addCard(){
    let temp = this.state.cards.slice();
    let arraySize = temp.length;
    temp.push(<NewCard key={arraySize}/>);
    this.setState({cards: temp});
  }

  handleChange(event){
    this.props.onChange(event);
  }

  render() {
    return(
      <form className="login">
        <h2>Create New Routine</h2>
        <FormGroup controlId="routineTitle">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Title
          </Col>
          <Col sm={10}>
            <FormControl
              name="routineTitle"
              type="text"
              value={this.props.title}
              onChange={this.handleChange}
              placeholder="Routine Title" />
          </Col>
        </FormGroup>
        <FormGroup controlId="routineTimePeriod">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Time Period
          </Col>
          <Col sm={10}>
            <FormControl
              name="routineTimePeriod"
              type="number"
              value={this.props.timePeriod}
              onChange={this.handleChange}
              placeholder="Duration (In Weeks)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="routineDescription">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl
              maxLength={1000}
              name="routineDescription"
              type="text"
              value={this.props.description}
              onChange={this.handleChange}
              placeholder="Description (Max 160 chars)" />
          </Col>
        </FormGroup>
        {this.props.cards}
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
      right: 10,
      title: '',
      description: '',
      shortDescription: '',
      duration: '',
      days: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <form className="innerForm">
        <h2>Create New Card</h2>
        <FormGroup controlId="cardTitle">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Title
          </Col>
          <Col sm={this.state.right}>
            <FormControl
              maxLength={30}
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Card Title" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardDescription">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl
              maxLength={1000}
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description (Max 1000 chars)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardShortDescription">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Short Description
          </Col>
          <Col sm={10}>
            <FormControl
              maxLength={160}
              type="text"
              value={this.state.shortDescription}
              onChange={this.handleInputChange}
              placeholder="An abbreviated description (Max 160 chars)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardDays">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Days
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              value={this.state.days}
              onChange={this.handleInputChange}
              placeholder="Input as list of numbers separated by commas (no spaces)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardDuration">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Duration
          </Col>
          <Col sm={10}>
            <FormControl
              type="number"
              value={this.state.duration}
              onChange={this.handleInputChange}
              placeholder="Duration (In number of minutes)"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="cardVideoUrl">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Video URL
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              value={this.state.videoUrl}
              onChange={this.handleInputChange}
              placeholder="Video URL"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="cardOrder">
          <Col componentClass={ControlLabel} sm={this.state.left}>
            Order
          </Col>
          <Col sm={10}>
            <FormControl
              type="number"
              value={this.state.order}
              onChange={this.handleInputChange}
              placeholder="Order for any particular day" />
          </Col>
        </FormGroup>
      </form>
  )
  }
}

export default NewRoutineContainer;
