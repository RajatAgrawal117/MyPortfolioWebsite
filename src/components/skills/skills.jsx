import React from 'react';
import { Card, Row, Col } from 'antd';
import skillsData from '../../data/skills';
import './styles/skills.css';

const { Meta } = Card;

const Skills = () => (
  <div className="skills-container">
    <h2>My Skills</h2>
    <Row gutter={[16, 16]}>
      {skillsData.map((skill, index) => (
        <Col xs={24} sm={12} md={8} lg={6} key={index}>
          <Card
            hoverable
            cover={<img alt={skill.title} src={skill.icon} className="skill-icon" />}
            className="skill-card"
          >
            <Meta title={skill.title} />
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Skills;
