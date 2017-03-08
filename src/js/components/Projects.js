import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
  render() {

    let projectItems;

    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }

    return (
     <div style={{textAlign: 'center'}}>
        <h1>yeeeee</h1>
        {projectItems}
      </div>);
  }
}

export default Projects;