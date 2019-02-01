import React from "react";
import PropTypes from "prop-types";

class AddCourseForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();

  // Declare functions from parent component
  // to be called later
  static propTypes = {
    addCourse: PropTypes.func
  };

  createCourse = event => {
    // stop the form from submitting
    event.preventDefault();
    const course = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value
    };
    // Call Parent Function, passing course input object
    // to be loaded into State from Parent
    this.props.addCourse(course);
    // refresh the form
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="course-edit" onSubmit={this.createCourse}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Only for you!</option>
          <option value="unavailable">Coming Soon!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <button type="submit">+ Add Course</button>
      </form>
    );
  }
}

export default AddCourseForm;
