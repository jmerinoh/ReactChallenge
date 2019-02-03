import React from "react";
import PropTypes from "prop-types";
import AddCourseForm from "./AddCourseForm";

class Inventory extends React.Component {
  // Declare functions from parent component
  // to be called later
  static propTypes = {
    addCourse: PropTypes.func,
    loadCoursesSampleJSON: PropTypes.func,
    loadCoursesSampleAPI: PropTypes.func
  };

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <button onClick={this.props.loadCoursesSampleJSON}>
          Load Courses json File
        </button>
        <button onClick={this.props.loadCoursesSampleAPI}>
          Load Courses REST API
        </button>
        <hr/>
        <b>New course?</b>
        <AddCourseForm addCourse={this.props.addCourse} />
        <br />
      </div>
    );
  }
}

export default Inventory;
