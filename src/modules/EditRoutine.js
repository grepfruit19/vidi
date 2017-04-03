import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import { Link } from 'react-router';
import Parse from 'parse';

import '../index.css';

class EditContainer extends Component {
  constructor(props){
    super(props);
    let routine = this.props.location.state.routine;
    let cards = routine.get('cardsCreated');
    console.log(cards);
    this.state = {
      routine: routine,
      routineTitle: routine.get('title'),
      routineTimePeriod: routine.get('timePeriod'),
      routineDescription: routine.get('description'),
      cards: cards
    }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.addCard = this.addCard.bind(this);
  }

  //Ensures all form data is stored in state.
  handleInputChange(event, index) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    if (index!==undefined){ //This is for NewCards.
      let cardsCopy = this.state.cards.slice();
      let currentCard = cardsCopy[index];
      currentCard[name] = value;
      this.setState({cards: cardsCopy});
    } else {
      this.setState({
        [name]: value
      });
    }
  }

  /*
  Adds a card associated with the routine. Info is kept in state
  */
  addCard(){
    let temp = this.state.cards.slice();
    let index = temp.length;
    temp.push({
      title: '',
      description: '',
      shortDescription: '',
      duration: '',
      days: '',
      order: '',
      otherUrl: '',
      videoUrl: '',
      key: index,
      index: index
    });
    this.setState({cards: temp});
  }

  render(){
    return(
      <EditRoutine
        routineTitle={this.state.routineTitle}
        routineTimePeriod={this.state.routineTimePeriod}
        routineDescription={this.state.routineDescription}
        onChange={this.handleInputChange}
        />
    )
  }
}

//This is the form for inputs for new routine.
class EditRoutine extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.props.onChange(event, this.props.index);
  }
  render() {
    return(
      <form className="login">
        <h2>Edit Routine</h2>
        <FormGroup controlId="routineTitle">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Title
          </Col>
          <Col sm={10}>
            <FormControl
              name="routineTitle"
              type="text"
              value={this.props.routineTitle}
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
              value={this.props.routineTimePeriod}
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
              value={this.props.routineDescription}
              onChange={this.handleChange}
              placeholder="Description (Max 160 chars)" />
          </Col>
        </FormGroup>
        {this.props.cards}
      </form>
    )
  }
}

export default EditContainer;
