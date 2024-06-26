import React from 'react';
import Skills from './Skills';
import skillsData from '../../data/skills';

const AllSkills = () => (
  <div className="skills">
    {skillsData.map((skill, index) => (
      <Skills key={index} title={skill.title} description={skill.description} />
    ))}
  </div>
);

export default AllSkills;
