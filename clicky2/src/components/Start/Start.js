import React, {
  Component
} from "react";

class Start extends Component {
  constructor(props) {
    super(props);
    console.log("start props", props);
    // this.state = { count: 0 };
  }

  render() {
    return (
      // <button type="button" className="btn btn-danger" onClick={this.randomizer}>Start</button>
      <button type="button" className="btn btn-danger" onClick={this.props.handlerClick}>Start</button>

    )
  }
}



export default Start;
