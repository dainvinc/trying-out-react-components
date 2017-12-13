import React, { Component } from 'react';
import './Bio.css';
import Education from './Education';
import Skills from './Skills';

class Bio extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">Vishal</h2>
                <img className="display-img" alt="profile" src="https://avatars1.githubusercontent.com/u/24849870?s=460&v=4" />
                <Education 
                    title="Education"
                    colleges = {['Marist College', 'SVIT']}
                    years = {['2017', '2015']}
                />
                <Skills 
                    title="Skills" 
                    skills={['HTML', 'CSS', 'JS']}
                />
            </div>
        );
    }    
}

export default Bio;