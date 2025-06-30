import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 - August 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI/ML Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena Digital, Los Angeles, CA</h4>
            <p>
              • Optimized taxiing graphs in OwlVision using OpenStreetMap NetworkX (OSMNX); applied closed-loop detection, semantic edge grouping, and pruning to eliminate 95% of redundant paths, improving traversal and geospatial clarity across airports.<br/>
              • Added support for Gemini Vision API integration within a custom PyQt5 labeling tool, allowing prompt-based object detection and semantic labeling of 40+ aviation classes; improved detection flexibility and reduced manual labeling effort by 60%.<br/>
              • Built AI pipelines using PyTorch and Whisper for cockpit state detection and audio transcription, integrating computer vision and NLP with Dash and GeoPandas to enable real-time decision support and visualization.<br/>
              • Leveraged Roboflow for annotation and augmentation streamlining the training pipeline for custom CV models in OwlVision.<br/>
              • Integrated multiple critical features and UI/UX enhancements into the PyQt based computer vision module, resolving 15+ bugs and improving inference throughput across high resolution datasets while reducing memory usage by 80%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2024 - July 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Plural Technology, Pune, India</h4>
            <p>
              • Designed an AI-powered Virtual Receptionist by integrating NLP for conversational AI and CV for facial recognition, while integrating text-to-speech (TTS) and speech-to-text (STT) to enable natural voice interactions streamlining visitor interactions.<br/>
              • Optimized NLP Transformers model to recognize diverse accents and names using Python regex and custom entity rules, improving extraction accuracy and reducing processing time by 20% in structured office communications.<br/>
              • Built a responsive frontend using React and deployed on AWS Amplify for scalability and reliability.<br/>
              • Integrated Microsoft Teams, Lists, and Power Automate APIs to streamline workflows for HR, cutting onboarding time by 50%.<br/>
              • Leveraged AWS SageMaker to train and deploy custom CV models (VGGface, ResNet), decreasing Inference Latency by 20%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2023 - August 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">ByteOrange, Pune, India</h4>
            <p>
              • Constructed ETL pipelines to process and clean datasets stored on Azure, staging them in Snowflake for further processing.<br/>
              • Integrated Snowflake with Power BI using native connectors to create real-time, auto-refreshing dashboards for business analytics.
            </p>
          </VerticalTimelineElement>
          
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;