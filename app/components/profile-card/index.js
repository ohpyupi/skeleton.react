import React from 'react';
import './styles.scss';

export default (props) => (
  <div className="profile-card card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.name}</p>
          <p className="subtitle is-6">{props.username}</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris.
        <br/>
        <a href={props.url} target='_blank'>{props.url}</a>
      </div>
    </div>
  </div>
)
