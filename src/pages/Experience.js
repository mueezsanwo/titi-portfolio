import React from 'react';
import { VerticalTimeline,VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
    

    return (
        <div className='experience'>
           <VerticalTimeline lineColor='#3e497a'>
             <VerticalTimelineElement
              className='vertical-timeline-element--education'
              date="2015 - 2016"
              iconStyle={{ background: "#3e497a", color: "#fff" }}
              icon={<SchoolIcon />}
               >
                <h3 className='vertical-timeline-element-title'>University of Lagos Foundation</h3>
                <p>Jupeb A-levels</p>
             </VerticalTimelineElement>
           <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          University Of Lagos, lagos, Nigeria
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Chemistry Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            IT Support intern @ Af-ricardo Synergy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lagos, Nigeria
          </h4>
          <p>Developed a Landing Page for the gaming businesss center.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer trainee @ Stutern Limited
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lagos, Nigeria
          </h4>
          <p>
            Learnt about frontend web development under the guidance of senior developers at Stutern
          </p>
        </VerticalTimelineElement>
        </VerticalTimeline> 
        </div>
    )
}

export default Experience;
