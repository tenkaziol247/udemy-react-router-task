import React, { Component } from 'react';

class Course extends Component {

    render() {
        let findCourseIndex = this.props.courses.findIndex(ele => {
            return ele.id === Number(this.props.match.params.courseID);
        })

        let courseInfo = <h1>404 Not Found!</h1>;
        if(findCourseIndex !== -1){
            courseInfo = <React.Fragment>
                <h1>{this.props.courses[findCourseIndex].title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseID}</p>
            </React.Fragment>
        }

        return (
            <div>
                {courseInfo}
            </div>
        );
    }
}

export default Course;