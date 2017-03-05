import React, { Component } from 'react';
import {
  FormGroup, Col, FormControl, ControlLabel, Button
} from 'react-bootstrap';
import Parse from 'parse';

/*
To change the form, you must change the rendered form,
the addCard method, the save method (createRoutine),

*/

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
    this.addCard = this.addCard.bind(this);
    this.createRoutine = this.createRoutine.bind(this);
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

  createRoutine(){
    const Routines = Parse.Object.extend("Routines");
    let routine = new Routines();
    routine.set("Title", this.state.routineTitle);
    routine.set("description", this.state.routineDescription);
    routine.set("timePeriod", this.state.routineTimePeriod);
    routine.set("username", this.props.currentUser.getUsername());
    //THE FOLLOWING ARE DEFAULT VALUES NOT IN THE FORM
    routine.set("price", "0.00");
    routine.set("isPaid", false);
    routine.set("oneliner", this.props.currentUser.attributes.authorName);
    //These variables are so that inner functions can access them.
    let cardsPassArray = this.state.cards.slice();
    routine.save(null, {
      success: (routine) => {
        console.log(routine);
        const CardsCreated = Parse.Object.extend("CardsCreated");
        let cardsSaveArray = [];
        cardsPassArray.forEach((current) => {
          let daysArray = current.days.split(",");
          daysArray = daysArray.map(function(current){
            return parseInt(current, 10);
          });
          let cardsCreated = new CardsCreated();
          cardsCreated.set("routineName", this.state.routineTitle);
          cardsCreated.set("routineID", routine.id);
          cardsCreated.set("Title", current.title);
          cardsCreated.set("Description", current.description);
          cardsCreated.set("shortDescription", current.shortDescription);
          cardsCreated.set("duration", parseInt(current.duration,10));
          cardsCreated.set("days", daysArray);
          cardsCreated.set("order", parseInt(current.order,10));
          cardsCreated.set("videourl", current.videoUrl);
          cardsCreated.set('urlstring', current.otherUrl);
          //THE FOLLOWING ARE DEFAULT VALUES NOT IN THE FORM

          cardsSaveArray.push(cardsCreated);
        });
        Parse.Object.saveAll(cardsSaveArray, {
          success: function(cardsSaveArray){
            alert("Saved finished");
          },
          error: function(error){
            alert("Error: " + error.message);
          }
        });
      },
      error: function(routine, error){
        alert("Error: " + error.message);
      }
    });
  }

  render(){
    const cardList = this.state.cards.map((card) =>
    <NewCard
      key={card.key}
      index={card.index}
      left={this.state.left}
      right={this.state.right}
      title={card.title}
      description={card.description}
      shortDescription={card.shortDescription}
      duration={card.duration}
      days={card.days}
      order={card.order}
      onChange={this.handleInputChange}
      />
    )
    return(
      <div className="login">
        <NewRoutine
          left={this.state.left}
          right={this.state.right}
          title={this.state.routineTitle}
          timePeriod={this.state.routineTimePeriod}
          description={this.state.routineDescription}
          onChange={this.handleInputChange}/>
          <br/>
          <br/>
          {cardList}
          <Button onClick={this.addCard} bsStyle="primary">Add Card</Button><br/>
          <Button onClick={this.createRoutine} bsStyle="primary">Submit</Button>

      </div>
    )
  }
}

//This class handles creation of new routines.
class NewRoutine extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
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
      </form>
    )
  }
}

//This class handles all cards associated with a routine.
class NewCard extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onChange(event, this.props.index);
  }

  render() {
    return(
      <form className="innerForm">
        <h2>Create New Card</h2>
        <FormGroup controlId="cardTitle">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Title
          </Col>
          <Col sm={this.props.right}>
            <FormControl
              maxLength={30}
              type="text"
              name="title"
              value={this.props.title}
              onChange={this.handleChange}
              placeholder="Card Title" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardDescription">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Description
          </Col>
          <Col sm={10}>
            <FormControl
              maxLength={1000}
              type="text"
              name="description"
              value={this.props.description}
              onChange={this.handleChange}
              placeholder="Description (Max 1000 chars)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardShortDescription">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Short Description
          </Col>
          <Col sm={10}>
            <FormControl
              maxLength={160}
              type="text"
              name="shortDescription"

              value={this.props.shortDescription}
              onChange={this.handleChange}
              placeholder="An abbreviated description (Max 160 chars)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardDays">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Days
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              name="days"
              value={this.props.days}
              onChange={this.handleChange}
              placeholder="Input as list of numbers separated by commas (no spaces)" />
          </Col>
        </FormGroup>
        <FormGroup controlId="cardDuration">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Duration
          </Col>
          <Col sm={10}>
            <FormControl
              type="number"
              name="duration"
              value={this.props.duration}
              onChange={this.handleChange}
              placeholder="Duration (In number of minutes)"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="cardVideoUrl">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Video URL
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              name="videoUrl"
              value={this.props.videoUrl}
              onChange={this.handleChange}
              placeholder="Video URL"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="cardOtherUrl">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Other URL
          </Col>
          <Col sm={10}>
            <FormControl
              type="text"
              name="otherUrl"
              value={this.props.otherUrl}
              onChange={this.handleChange}
              placeholder="URLs to articles, recipes, etc"/>
          </Col>
        </FormGroup>
        <FormGroup controlId="cardOrder">
          <Col componentClass={ControlLabel} sm={this.props.left}>
            Order
          </Col>
          <Col sm={10}>
            <FormControl
              type="number"
              name="order"
              value={this.props.order}
              onChange={this.handleChange}
              placeholder="Order for any particular day" />
          </Col>
        </FormGroup>
      </form>
  )
  }
}

export default NewRoutineContainer;
