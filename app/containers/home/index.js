import React from 'react';
import ProfileCard from '../../components/profile-card';

export default class Container extends React.Component {
	constructor(props) {
		super(props);
    let projectStore = props.stores.projectStore;
    this.projectStates = projectStore.getStates();
	}
	componentWillMount() {
	}
	componentDidMount() {
	}
	render() {
		return (
      <section id='home' className='section'>
        <div className='container'>
          <h1 className='title'>{this.projectStates.name}</h1>
          <div className='field is-grouped is-grouped-multiline'>
            <div className='control'>
              <div className="tags has-addons">
                <span className="tag is-dark">git</span>
                <span className="tag is-info">0.1.0</span>
              </div>
            </div>
            <div className='control'>
              <div className="tags has-addons">
                <span className="tag is-dark">date</span>
                <span className="tag is-success">{this.projectStates.release.date}</span>
              </div>
            </div>
          </div>
          <div className='content'>

            <h3>Description</h3>
            <p>{this.projectStates.description}</p>

            <h3>Dependencies</h3>
            <ul>
              {this.projectStates.dependencies.map((dep, idx)=>{
                return (<li key={idx}>{dep}</li>);
              })}
            </ul>

            {this.projectStates.authors.map((author, idx)=>{
              return (<ProfileCard key={idx} name={author.name} username={author.username} url={author.gitUrl}/>); 
            })}

          </div>
        </div>
      </section>
		);
	}
}
