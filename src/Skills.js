import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    render() {
        const {title} = this.props;
        const skills = this.props.skills.map((skill, index) => {
            return <li className="list" key={index}>{skill}</li>
        });
        return (
            <div>
                <h3 className="list">{title}</h3>
                <ul>
                    {skills}
                </ul>
            </div>
        );
    }
}

export default Skills;
