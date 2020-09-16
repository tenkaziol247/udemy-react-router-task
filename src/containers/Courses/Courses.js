import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return (<Link to={`${this.props.match.url}/${course.id}`} key={course.id}>
                                <article className="Course" >{course.title}</article>
                            </Link>);
                        })
                    }
                </section>
                <Switch>
                    <Route path={this.props.match.url + '/:courseID'} exact render={(props) => <Course {...props} courses={this.state.courses} />} />
                </Switch>
            </div>
        );
    }
}

export default Courses;