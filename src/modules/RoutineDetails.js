import React, { Component } from 'react';
import { Link } from 'react-router';
import Parse from 'parse';

class RoutineDetails extends Component {
  constructor(props){
    super(props);
    const routine = this.props.location.state.routine;
    console.log(routine);
    if (this.props.location.state.routine){
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
        routine: this.props.location.state.routine,
        title: routine.get("title"),
        author: routine.get("oneLiner"),
        tags: routine.get("tags"),
        timePeriod: routine.get("timePeriod"),
        cards: cards
      }
    }
  }
  /* TODO: Handle going direct-to-link.
  componentDidMount(){
    if (this.state.routine===null){
      console.log("Querying");
      const Routine = Parse.Object.extend("Routine");
      const query = new Parse.Query(Routine);
      query.get(this.props.params.routineID,{
        success: function(routineObj){
          const rawCards = routineObj.get("cardsCreated");
          let cards = [];
          rawCards.forEach( (current)=>{
            cards.push(<CardDetails
              title={current.get("title")}
              description={current.get("description")}
              shortDescription={current.get("shortDescription")}
              duration={current.get("duration")}
              />);
          });
          this.setState({
            routine: routineObj,
            title: routineObj.get("title"),
            author: routineObj.get("oneLiner"),
            tags: routineObj.get("tags"),
            timePeriod: routineObj.get("timePeriod"),
            cards: cards
          });
        },
        error: function(object, error){
          alert("Error, please contact support with the error message: " + error);
        }
      });
    }
  }
  */
  render(){
    return(
      <div className="card">
        <h3>Title: {this.state.title}</h3>
        <Link to={{
          pathname: "/edit",
          state: {routine: this.state.routine}
        }}><button>Edit Routine</button></Link>
        <p>Author Name: {this.state.author}</p>
        <p>Time Period (Weeks): {this.state.timePeriod}</p>
        {this.state.cards}
      </div>
    )
  }
}

class CardDetails extends Component{
  constructor(props){
    super(props);
    let display = (
      <div>
        <h4>Card Title: {this.props.title}</h4>
        <p>Description: {this.props.description}</p>
        <p>Short Description: {this.props.shortDescription}</p>
        <p>Duration: {this.props.duration}</p>
        <p>Video Link: {this.props.videoUrl}</p>
        <p>Other Link: {this.props.urlString}</p>
        <p>Days: {this.props.days}</p>
        <button>Edit</button>
      </div>
    );
    let form = (
      <form>

      </form>
    )
  }
  render(){
    return(
      <div className="inner-card">
        <h4>Card Title: {this.props.title}</h4>
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
