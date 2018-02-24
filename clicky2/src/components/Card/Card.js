import React, {Component} from "react";

const cardStyle = {
  width: '150px',
  height: '150px',
  border: '2px solid black'
};


const hoverStyle = {
  // color: "red"
  border: '8px solid red'

}
//random logic here; draw card at random to that pix are shuffled on game start/after each pic click



class Card extends React.Component {
  constructor(props) {
        super(props);
        // this.state = { count: 0 };
    }

    handleHover = () => {
      // We always use the setState method to update a component's state
      // this.setState({ style: this.hoverStyle });
      console.log("mouse entered");
    };

render() {
  return (


  <div className="col-md-3 col-sm-4 col-xs-6">
    <div className="card" style={cardStyle} data-ident={this.props.id} onClick={this.props.handlerClick} onMouseEnter={this.handleHover}>
      <div className="img-container" style={cardStyle}>
        <img alt={this.props.name} src={this.props.image} style={cardStyle}/>
      </div>
    </div>
  </div>
  )
  }
}





export default Card;


//onClick={() => props.removeFriend(props.id)} className="remove"
