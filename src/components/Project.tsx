import React from "react";
import ChatDB from '../assets/images/ChatDB.jpeg';
import BirdDetectionFinal from '../assets/images/Bird DetectionFinal.jpg';
import ExoplanetDetection from '../assets/images/Exoplanetdetection.jpeg';
import ReinforcementLearning from '../assets/images/Reinforcementgaming.png';
import DataPipeline from '../assets/images/DataPipeline.jpeg';

import '../assets/styles/Project.scss';




function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/bhosaleshivam/ChatDB50" target="_blank" rel="noreferrer"><img src={ChatDB} className="zoom" alt="ChatDB - Natural Language Interface" width="100%"/></a>
                <a href="https://github.com/bhosaleshivam/ChatDB50" target="_blank" rel="noreferrer"><h2>ChatDB - Natural Language Interface for SQL & NoSQL Databases</h2></a>
                <p>
                  • Engineered a Flask backend to interface with the Gemini LLM API, incorporating prompt engineering and implementing local cache layers to reduce latency and convert natural language input into accurate, executable queries.<br/>
                  • Implemented frontend interface using React to display results in a readable, structured table format.<br/>
                  • Integrated query routing logic to intelligently switch between MySQL and MongoDB based on user intent and database context.
                </p>
            </div>
            <div className="project">
                <a href="https://ieeexplore.ieee.org/document/10837870" target="_blank" rel="noreferrer"><img src={BirdDetectionFinal} className="zoom" alt="Bird Species Identification" width="100%"/></a>
                <a href="https://ieeexplore.ieee.org/document/10837870" target="_blank" rel="noreferrer"><h2>Bird Species Identification using Object Detection Techniques</h2></a>
                <p>
                  • Achieved a mAP score of 0.629 on YOLOv5 and 0.457 on YOLOv8 respectively on 28 classes.<br/>
                  • Conducted rigorous evaluation of YOLO models on live videos, assessing their ability to accurately identify and track bird species over time.<br/>
                  • Implemented advanced computer vision techniques using YOLO, OpenCV, and Git for version control in Google Colab environment.<br/>
                  • Published research findings in IEEE ASIACON 2024 conference proceedings.
                </p>
            </div>
            <div className="project">
                <a href="https://link.springer.com/book/9789819623280" target="_blank" rel="noreferrer"><img src={ExoplanetDetection} className="zoom" alt="Exoplanet Detection" width="100%"/></a>
                <a href="https://link.springer.com/book/9789819623280" target="_blank" rel="noreferrer"><h2>Exoplanet Detection and Habitability Analysis</h2></a>
                <p>
                  • Trained an Artificial Neural Network to detect troughs in astronomical flux data, achieving an accuracy of 89%.<br/>
                  • Implemented various classical machine learning models including XGBoost, SVM, and KNN for determining habitability of exoplanets.<br/>
                  • Leveraged Python ecosystem with Scikit-learn, Keras, NumPy, and Seaborn for comprehensive data analysis and visualization.<br/>
                  • Contributed to published research in ICDAI-2024 conference proceedings.
                </p>
            </div>
            <div className="project">
                <a href="https://ieeexplore.ieee.org/document/10692314" target="_blank" rel="noreferrer"><img src={ReinforcementLearning} className="zoom" alt="Reinforcement Learning Kart-Racing" width="100%"/></a>
                <a href="https://ieeexplore.ieee.org/document/10692314" target="_blank" rel="noreferrer"><h2>Reinforcement Learning in Kart-Racing Gaming</h2></a>
                <p>
                  • Developed a Non-Player Character (NPC) agent leveraging reinforcement learning for navigating and optimizing performance in a complex kart-racing environment.<br/>
                  • Implemented SOTA algorithms: PPO and SAC on NPCs proved far more efficient than traditional AI techniques.<br/>
                  • Published research on Unity ML-Agents and reinforcement learning applications in gaming at IEEE WCONF 2024.
                </p>
            </div>
            <div className="project">
                <img src={DataPipeline} className="zoom" alt="End to End Spotify Data Pipelining" width="100%"/>
                <h2>End to End Spotify Data Pipelining</h2>
                <p>
                  • Built an ETL pipeline using CloudWatch for trigger, AWS Lambda to extract and transform Spotify data into S3 using public API.<br/>
                  • Automated data loading into Snowflake via SnowPipe, enabling scalable storage and real-time ingestion of structured metrics.<br/>
                  • Connected Power BI to Snowflake to generate live dashboards visualizing trends in tracks, artists, and user engagement behavior.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Project;