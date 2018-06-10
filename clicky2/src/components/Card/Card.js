import React, {Component} from "react";
// import Interactive from 'react-interactive';

const cardStyle = {
  width: '150px',
  height: '150px',
  border: '2px solid black'
};

// const hoverStyle = {
//   border: '2px solid red'
// }


  class Card extends Component {
  constructor(props) {
        super(props);
        this.state = {
          border: '2px solid blue'
   };
        // console.log("card props", props);
    }
    handleHover = () => {
      this.setState({ border:'2px solid red' });
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
