import React, {Component} from "react";

const cardStyle = {
  width: '150px',
  height: '150px',
  border: '2px solid black'
};

// handleHover = () => {
//   // We always use the setState method to update a component's state
//   this.setState({ count: this.state.count + 1 });
// };

const Card = props => (
  <div className="col-md-3">
  <div className="card" style={cardStyle} onMouseEnter={this.hoverHandler}>
    <div className="img-container" style={cardStyle}>
      <img alt={props.name} src={props.image} style={cardStyle}/>
    </div>
  </div>
</div>
);



export default Card;


//onClick={() => props.removeFriend(props.id)} className="remove"
