import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 4,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h3>Count: {count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Update Count
        </button>
        <h2>Name: {name}</h2>
        <h4>Location: {location}</h4>
        <h4>Contact: 9633960330</h4>
      </div>
    );
  }
}
export default UserClass;
