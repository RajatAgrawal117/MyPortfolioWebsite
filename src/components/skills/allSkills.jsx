import React from 'react';
import Skill from './skills';
import skillsData from '../../data/skills';

const AllSkills = () => (
    <div className="skills">
        {skillsData.map((skill, index) => (
            <Skill key={index} title={skill.title} description={skill.description} />
        ))}
    </div>
);

export default AllSkills;
