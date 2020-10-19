import React from "react";
import FlavortownIndexItem from "./flavortown_index_item"
import RestaurantIndexItem from "./restaurant_index_item"


class FlavorTown extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchBurgers();
    }

    render() {

        const burgerForm = (
            <button onClick={() => this.props.openModal('burger')}
                className="burger-form">ADD A FLAVOR</button>
        );

        const burgers = this.props.burgers.map((el) => {
            return <FlavortownIndexItem key={el.id}
                burger={el}  restaurants={this.props.restaurants} users={this.props.users}
                currentUser={this.props.currentUser}
                deleteBurger={this.props.deleteBurger}
                openModal={this.props.openModal}/>
            })

        const restaurantList = this.props.restaurantList.map((el) => {
            return <RestaurantIndexItem key={el.id} restaurant={el}/>
        })

        return (
            <div className="global-container">  
                <div className="global-content">
                    <div className="global-header">
                        <h3 className="global-header-text">Recent Global FlavorChecks</h3>
                        {burgerForm}
                    </div>
                    <div className="global-review-container">
                        {burgers}
                    </div>
                </div>
                <ul className="restaurant-list">
                    <h2>Burger Joints To Review</h2>
                    {restaurantList}
                </ul>
            </div>

        )
    }
}

export default FlavorTown