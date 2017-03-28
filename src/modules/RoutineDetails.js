import React, { Component } from 'react';
import { Link } from 'react-router';
import Parse from 'parse';

class RoutineDetails extends Component {
  constructor(props){
    super(props);
    const routine = this.props.location.state.routine;
    console.log(routine);
    const rawCards = routine.get("cardsCreated");
    let cards = [];
    rawCards.forEach( (current)=>{
      cards.push(<CardDetails
        title={current.get("title")}
        description={current.get("description")}
        shortDescription={current.get("shortDescription")}
        duration={current.get("duration")}
        />);
    });
    this.state = {
      title: routine.get("title"),
      author: routine.get("oneLiner"),
      tags: routine.get("tags"),
      timePeriod: routine.get("timePeriod"),
      cards: cards
    }
  }
  render(){
    return(
      <div>
        <h3>Title: {this.state.title}</h3>
        <p>Author Name: {this.state.author}</p>
        <p>Time Period (Weeks): {this.state.timePeriod}</p>
        {this.state.cards}
      </div>
    )
  }
}

class CardDetails extends Component{
  render(){
    return(
      <div>
        <h2>Card Title: {this.props.title}</h2>
        <p>Description: {this.props.description}</p>
        <p>Short Description: {this.props.shortDescription}</p>
        <p>Duration: {this.props.duration}</p>
        <p>Video Link: {this.props.videoUrl}</p>
        <p>Other Link: {this.props.urlString}</p>
        <p>Days: {this.props.days}</p>
      </div>
    )
  }
}

export default RoutineDetails;
