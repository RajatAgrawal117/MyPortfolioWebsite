import React from 'react';
import { Card, Row, Col } from 'antd'; // Import necessary components from ant.design
import skillsData from '../../data/skills';
import './styles/skills.css'; // Your custom styles

const { Meta } = Card;

const skills = () => (
    <div className="skills-container">
        <h2>My Skills</h2>
        <Row gutter={16}>
            {skillsData.map((skill, index) => (
                <Col span={6} key={index}>
                    <Card
                        hoverable
                        cover={<img alt={skill.title} src={skill.icon} />} // Adjust the path to your icons
                    >
                        <Meta title={skill.title} />
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
);

export default skills;
