import React, {Component} from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
  return (
    <div>
      <h2>{this.state.date.toLocaleTimeString()}</h2>
    </div>
  );
}
}



// setInterval(tick, 1000);

export default Clock;
