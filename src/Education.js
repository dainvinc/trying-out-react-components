import React, { Component } from 'react';
import './Education.css';

class Education extends Component {
    render() {
        const {title} = this.props;
        const colleges = this.props.colleges.map((college, i) => {
            return (
                <li key={i}>{ college } </li>
            );
        });
        
        return (
            <div>
                <h3>{ title }</h3>
                <ul>
                    { colleges }
                </ul>
            </div>
        );
    }
}

export default Education;