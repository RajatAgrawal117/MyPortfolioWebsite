import React from 'react';
import skillsData from '../../data/skills';
import './styles/skills.css';

const Skills = () => (
    <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
            {skillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.title} className="skill-icon" />
                    <div className="skill-title">{skill.title}</div>
                </div>
            ))}
        </div>
    </div>
);

export default Skills;
