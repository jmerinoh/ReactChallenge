import React, { Component } from "react";
import Inventory from "./Inventory";
import Course from "./Course";
import sampleCourses from "../sample-courses";

class App extends Component {
  state = {
    courses: {}
  };
  // State can be updated from subcomponents, even State is
  // private for current component.
  // 1) Define arrow funtions.
  // 2) Pass these functions as props to subcomponents
  // 3) Subcomponents 
  // 3.1) import 'prop-types'
  // 3.2) declare static propTypes = { addCourse: PropTypes.func };
  // 3.3) call this.props.addCourse(course);
  addCourse = course => {
    const courses = { ...this.state.courses };
    courses[`cou${Date.now()}`] = course;
    this.setState({ courses });
  };
  loadCoursesSampleJSON = () => {
    this.setState({ courses: sampleCourses });
  };
  loadCoursesSampleAPI = () => {
    fetch(`https://localhost:5001/api/courses`)  // NetCoreChallenge
    .then(response => response.json())
    .then(data => this.setState({ courses: data }));
  };
  render() {
    return (
      <div className="challenge-testout">
        <div className="menu">
          <h2>Courses</h2>
          <ul className="courses">
            {Object.keys(this.state.courses).map(key => (
              <Course key={key} index={key} details={this.state.courses[key]} />
            ))}
          </ul>
        </div>
        <Inventory
          addCourse={this.addCourse}
          loadCoursesSampleJSON={this.loadCoursesSampleJSON}
          loadCoursesSampleAPI={this.loadCoursesSampleAPI}
        />
      </div>
    );
  }
}

export default App;
