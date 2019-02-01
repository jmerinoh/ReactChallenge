import React from "react";
import PropTypes from "prop-types";
import AddCourseForm from "./AddCourseForm";

class Inventory extends React.Component {
  // Declare functions from parent component
  // to be called later
  static propTypes = {
    addCourse: PropTypes.func,
    loadSampleCourses: PropTypes.func
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddCourseForm addCourse={this.props.addCourse} />
        <br />
        <button onClick={this.props.loadSampleCourses}>
          Load Sample Courses
        </button>
      </div>
    );
  }
}

export default Inventory;
