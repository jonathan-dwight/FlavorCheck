import React from "react";
import StarRating from "./star-rating"


class BurgerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: "",
            rating: 0,
            restaurant_id: "",
            author_id: this.props.sessionId,
            imageFile: null,
            imageUrl: null

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRestaurantChange = this.handleRestaurantChange.bind(this)
        this.handlePhotoInput = this.handlePhotoInput.bind(this)
        this.setRating = this.setRating.bind(this)
        // this.handleRatingInput = this.handleRatingInput.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.sessionId)
    }

    //maybe do restaurant in the backend?
    //would have to convert to int for rating

    handleInput(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value })
    }

    handleRestaurantChange(e) {
        let restaurant = e.currentTarget.value
        let restaurantId;
        for (let i = 0; i < this.props.restaurants.length; i++) {
            if (this.props.restaurants[i].name === restaurant) {
                restaurantId = this.props.restaurants[i].id
            }
        }
        this.setState ({ restaurant_id: restaurantId })
    }

    handlePhotoInput(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    setRating(rating) {
        let num = parseInt(rating)
        this.setState({ rating: num });

    };
    // handleHoverInput(e) {
    //     e.target.style.color = 'orange'
    // }

    // handleRatingInput(field, value) {
    //     return (e) => this.setState({ [field]: value })
    //     //how to have it change input
    //     //counter of stars?
    // }   


    handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('burger[name]', this.state.name);
        formData.append('burger[description]', this.state.description);
        formData.append('burger[rating]', this.state.rating);
        formData.append('burger[restaurant_id]', this.state.restaurant_id);
        formData.append('burger[author_id]', this.state.author_id);
        if (this.state.imageFile) {
            formData.append('burger[photo]', this.state.imageFile);
        }
        this.props.processForm(formData).then(() => {
            this.props.closeModal()
        })
    }

    render() {
        const restaurants = []
        const restaurantMap = this.props.restaurants.map((el) => {
            restaurants.push(<option key={el.id} value={el.name}>{el.name}</option>)
        })//NEED TO FIGURE OUT HOW TO GET THE RESTAURANT TO BE AUTOPOPULATED IN FORM WHEN IN SHOW PAGE

        const errors = this.props.errors.map((el, idx) => {
            return <div className="burger-errors" key={idx}>{el}</div>
        })

        const preview = this.state.imageUrl ? (<img src={this.state.imageUrl} className="add-picture"/> 
        ) : (<img src={window.checkin} className="add-picture" htmlFor="file" />) 

        return(
            <div className="burger-form-box">
                <div className="inner-burger-form-box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="burger-form-header">
                            <h4 className="burger-form-header-text">Share Your Flavor!</h4>
                            <div onClick={this.props.closeModal} className="close-x-burger">X</div>
                        </div>
                        <div className="form-content">
                            <div className="burger-text-picture">
                                <div className="burger-text">
                                    <input type="text" className="burger-name" 
                                    placeholder="What burger are you FlavorChecking?" 
                                    onChange={this.handleInput("name")}/>

                                    <textarea cols="50" rows="5" placeholder="What do you think?" 
                                    className="text-description" onChange={this.handleInput("description")}></textarea>
                                </div>
                                <div className="picture-box">
                                    <input type="file" name="file" id="file" onChange={this.handlePhotoInput} className="label-file"/>
                                    <label htmlFor="file">
                                        {preview} 
                                    </label>
                                </div>
                            </div>

                            <div className="form-input rating">
                                <label htmlFor="rating">Rating:</label>
                                <StarRating
                                    numberOfStars="5"
                                    currentRating="0"
                                    passRating={this.setRating}
                                />
                            </div>


                            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
                            
                            
                            
                            
                            {/* <span className={this.handleHoverInput ? "fa fa-star" : "fa fa-star checked" } 
                            onMouseOver={this.handleHoverInput} 
                            onClick={this.handleRatingInput('rating', 1)}></span>
                            
                            
                            <span className="fa fa-star" onClick={this.handleRatingInput('rating', 2)}></span>
                            <span className="fa fa-star" onClick={this.handleRatingInput('rating', 3)}></span>
                            <span className="fa fa-star" onClick={this.handleRatingInput('rating', 4)}></span>
                            <span className="fa fa-star" onClick={this.handleRatingInput('rating', 5)}></span> */}


                            <div className="restaurant-form">
                                <p>Burger Joints:</p>
                                <select className="restaurants" onChange={this.handleRestaurantChange}>
                                    <option value="default">--select one--</option>
                                    {restaurants.map((el) => el)}
                                </select>
                            </div>
                            <input type="submit" name="" id=""/>
                            {errors}
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default BurgerForm;