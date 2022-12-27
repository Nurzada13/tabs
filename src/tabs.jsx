import React from "react";
import { data } from "./tadsData";
class Tabs extends React.Component {
  constructor() {
    super();
    this.state = {
      screenWord: 2,
    };
  }

  tabMethod = (index) => {
    this.setState({ screenWord: index });
  };

  render() {
    return (
      <>
        {data.map((obj, index) => (
          <button
            onClick={() => this.tabMethod(index)}
            className={this.state.screenWord == index ? "activeBtn" : "btn"}
          >
            {obj.title}
          </button>
        ))}

        <div className="text">
          <p>{data[this.state.screenWord].description}</p>
        </div>
      </>
    );
  }
}
export default Tabs;
