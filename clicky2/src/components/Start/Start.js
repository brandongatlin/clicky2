import React, {
  Component
} from "react";

class Start extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { count: 0 };
  }

  render() {
    return (
      <button type="button" className="btn btn-danger" onClick={this.randomizer}>Start</button>
    )
  }
}



export default Start;