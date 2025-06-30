import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud, faDatabase, faFaceGrinWink, faGraduationCap, faChartLine } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "React",
    "Flask",
    "Unity ML Agents",
    "PyTorch",
    "Keras",
    "TensorFlow",
    "XGBoost",
    "scikit-learn",
    "OpenCV",
    "NLTK",
    "spaCy",
    "PySpark",
    "Whisper",
    "Gemini API",
    "Roboflow"
];

const labelsSecond = [
    "Data Engineering",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "DynamoDB",
    "Snowflake",
    "Hadoop",
    "Apache Spark",
    "AutoGen",
    "LangChain",
    "PyDantic",
    "Model Context Protocol (MCP)",
    "Gradio",
    "LLMOps",
    "ETL Pipelines",
    "Power BI",
    "AWS Lambda",
    "CloudWatch",
    "SnowPipe"
];

const labelsThird = [
    "OpenAI",
    "CrewaAI",
    "LangGraph",
    "GeoPandas",
    "Dash",
    "Power BI",
    "Azure",
    "AWS",
    "Linux",
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS SageMaker",
    "AWS Amplify",
    "Microsoft Teams API",
    "Power Automate",
    "OSMNX",
    "NetworkX",
    "PyQt5"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGraduationCap} size="3x"/>
                    <h3>AI/ML Research & Engineering</h3>
                    <p>Published 3 research papers in IEEE and Springer conferences on ML-Agents, computer vision, and deep learning. Specialized in building full-stack ML applications, LLM-based tools, and scalable AI pipelines. Hands-on experience with computer vision, NLP, reinforcement learning, and infrastructure monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Data Engineering & Data Science</h3>
                    <p>Built end-to-end data pipelines including ChatDB (natural language interface for databases) and Spotify data pipeline. Experience with ETL processes, real-time data processing, and creating interactive dashboards. Strong proficiency in data warehousing and business intelligence solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud & DevOps Engineering</h3>
                    <p>Hold 5 Azure cloud certifications with hands-on experience in AWS and Azure services. Implemented CI/CD pipelines, automated deployments, and cloud-native solutions. Experience with containerization, serverless architectures, and cloud infrastructure management.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;