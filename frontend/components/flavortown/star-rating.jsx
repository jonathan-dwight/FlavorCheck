import React from "react";
// import './star-rating.css'

class StarRating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRating: this.props.currentRating,
            hoverRating: 0,
        };
        this.setRating = this.setRating.bind(this)
        this.starClickHandler = this.starClickHandler.bind(this)
        this.hoverHandler = this.hoverHandler.bind(this)
    }

    hoverHandler(e) {
        const stars = e.target.parentElement.getElementsByClassName('star');
        const hoverValue = e.target.dataset.value;
    
        Array.from(stars).forEach( (star) => {
            star.style.color = hoverValue
                 >= star.dataset.value ? 'yellow': 'gray'
        });
        this.props.passRating("0")
    }

    setRating(e) {
        let rating = this.state.currentRating; 
        const stars = e.target.parentElement.getElementsByClassName('star');
        this.setState( {currentRating: rating} ) 
        Array.from(stars).forEach((star) => {
            star.style.color = rating
                >= star.dataset.value ? 'orange' : 'gray'
        });
        this.props.passRating(rating)
        
    }

    starClickHandler(e) {
        const stars = e.target.parentElement.getElementsByClassName('star');
        const clickValue = e.target.dataset.value;
        Array.from(stars).forEach((star) => {
            star.style.color = clickValue
                >= star.dataset.value ? 'orange' : 'gray'
        });
        const rating = e.target.dataset.value; 
        this.setState({ currentRating: rating} )
        this.props.passRating(rating)
    }

    render() {
        return (
            <div className="rating"
                ref="rating"
                data-rating={this.state.currentRating}
            >
                {[...Array(+this.props.numberOfStars).keys()].map((n) => {
                    return (
                        <span
                            className="star"
                            key={n+1}
                            data-value={n+1}
                            onMouseOver={this.hoverHandler}
                            onClick={this.starClickHandler}
                            onMouseOut={this.setRating}
                        >
                        &#9733;
                        </span>
                    )
                })}
            </div>
        )
    } 
}

export default StarRating;