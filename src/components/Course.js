import React from "react";

class Course extends React.Component {
  render() {
    const { name, price, desc, status } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-course">
        <h3 className="course-name">
          {name}&nbsp;
          <span className="price">{price}</span>
        </h3>
        <p>{desc}</p>
      </li>
    );
  }
}

export default Course;
