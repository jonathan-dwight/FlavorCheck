import React from "react";
import StarRating from "./star-rating"
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as burgerData from "./10815-walking-burger.json"



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
            imageUrl: null,
            loading: false

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRestaurantChange = this.handleRestaurantChange.bind(this)
        this.handlePhotoInput = this.handlePhotoInput.bind(this)
        this.setRating = this.setRating.bind(this)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.sessionId)
    }

    componentWillUnmount() {
        this.props.clearBurgerErrors();
    }

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

    handleSubmit(e) {
        e.preventDefault()
        this.setState({ loading: true })
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
        }).fail(() => {
            this.setState({ loading: false, restaurant_id: "" })
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

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: burgerData.default,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };

        let display = !this.state.loading ? (
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
                                    <div className="burger-header-wrap">
                                        <input type="text" className="burger-name" 
                                        placeholder="What burger are you FlavorChecking?" 
                                        onChange={this.handleInput("name")}
                                        />

                                        <div className="restaurant-form">
                                            <select onChange={this.handleRestaurantChange} id="standard-select">
                                                <option value="default">-- SELECT A BURGER JOINT --</option>
                                                {restaurants.map((el) => el)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="restaurant-pic-text">
                                        <textarea cols="5" rows="5" placeholder="What did you think? Optional - but we want to know the details!" 
                                        className="text-description" onChange={this.handleInput("description")}></textarea>
                                        <div className="picture-box">
                                            <input type="file" name="file" id="file" onChange={this.handlePhotoInput} className="label-file"/>
                                            <label htmlFor="file">
                                                {preview} 
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-bottom-box">
                                <div className="form-input rating">
                                    <label htmlFor="rating" className="rating-header">Rating (1-5): </label>
                                    <StarRating
                                        numberOfStars="5"
                                        currentRating="0"
                                        passRating={this.setRating}
                                    />
                                </div>

                                
                                <input type="submit" value="ADD YOUR FLAVORCHECK!" className="flavorcheck-button"/>
                            </div>
                            {errors}
                        </div>
                    </form>
                </div>
            </div>
        ) : (
                <FadeIn>
                    <div className="d-flex justify-content-center align-items-center">
                            <Lottie options={defaultOptions} height={300} width={300} />
                    </div>
                </FadeIn>
        )

        return (
            <div>
                {display}
            </div>
        )
    }

}

export default BurgerForm;