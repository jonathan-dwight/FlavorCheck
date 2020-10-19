import React from "react";
// import './star-rating.css'

class StarRating extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentRating: this.props.currentRating
        };
        this.setRating = this.setRating.bind(this)
        this.starClickHandler = this.starClickHandler.bind(this)
        this.hoverHandler = this.hoverHandler.bind(this)
    }

    // componentDidMount() {
    //     this.setRating();
    // }

    hoverHandler(e) {
        const stars = e.target.parentElement.getElementsByClassName('star');
        const hoverValue = e.target.dataset.value;
        let that = this.state
        Array.from(stars).forEach( (star) => {
            star.style.color = hoverValue
                 >= star.dataset.value ? 'orange': 'gray'
        });
    }

    setRating(e) {
        let rating = e.target.dataset.value; 
        this.setState( {currentRating: rating} ) //set state so it stays highlighted
        
        if (this.props.onClick) {
            this.props.onClick(rating);
        }
    }

    starClickHandler(e) {
        debugger
        const rating = e.target.dataset.value; 
        this.setState({ currentRating: rating} )
        if (this.props.onClick) {
            this.props.onClick(rating);
        }
    }

    render() {
        return (
            <div className="rating"
                ref="rating"
                data-rating={this.state.currentRating}
                onMouseOut={this.setRating}
            >
                {[...Array(+this.props.numberOfStars).keys()].map((n) => {
                    return (
                        <span
                            className="star"
                            key={n+1}
                            data-value={n+1}
                            onMouseOver={this.hoverHandler}
                            onClick={this.starClickHandler}
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