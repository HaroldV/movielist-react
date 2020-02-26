import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ movie }) => {

    return (
        <div className='card'>
            <img src={movie.img.src} alt={movie.img.alt} width='125' />
            <div className='card-body'>
                <h5 className='card-title'> {`#${movie.ranking} - ${movie.title} (${movie.year})`}</h5> 
            </div>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'>{ `Distribuidor: ${movie.distributor}`}</li>
                <li className='list-group-item'>{ `Amount: ${movie.amount}`}</li>
            </ul>
        </div>
    );
}

Card.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        distributor: PropTypes.string,
        year: PropTypes.number,
        amount: PropTypes.number,
        img: PropTypes.shape({
            src: PropTypes.string,
            alt: PropTypes.string
        }),
        ranking: PropTypes.number
    }).isRequired
}

export default Card;