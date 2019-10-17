import React, {Component} from 'react'
import './Card.css'

const Card = props => (
  <div className="body-box">
    <h2 className="current-id">{props.index+1}/{props.length}</h2>
    <h2>{props.person.name.first} {props.person.name.last}</h2>
    <p>From: {props.person.city}, {props.person.country}</p>
    <p>Job Title: {props.person.title}</p>
    <p>Employer: {props.person.employer}</p>
    <p>Favorite Movies: </p>
    <ul>
      {
        props.person.favoriteMovies.map(movie => <li>{movie}</li>)
      }
    </ul>
  </div>
)


export default Card