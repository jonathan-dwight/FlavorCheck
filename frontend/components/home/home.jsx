import React from "react";
import { Link, Redirect } from "react-router-dom";
import FlavortownIndexItem from "../flavortown/flavortown_index_item"

class Home extends React.Component {
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
                burger={el} restaurants={this.props.restaurants} users={this.props.users} />
        })

        let numPosts = 0;
        for (let i = 0; i < this.props.burgers.length; i++) {
            if (this.props.burgers[i].authorId === this.props.currentUser.id) {
                numPosts += 1
            }
        }

        return (
            <div className="home-container">
                <div className="home-content">
                    <div className="home-header">
                        <h3 className="home-header-text">Following's FlavorChecks</h3>
                        {burgerForm}
                    </div>
                    <div className="home-review-container">
                        {burgers}
                    </div>
                </div>
                <ul className="profile-list">
                    <div className="box">
                        <div className="profile-username">
                            <img src={window.avatar} className="avatar-review"/>
                            <div className="box-username">
                                <h2>{this.props.currentUser.name}</h2>
                                <p>{this.props.currentUser.username}</p>
                            </div>
                        </div>
                        <div className="box-of-badges">
                            <div className="inner-box">
                                <p className="number-text">{numPosts}</p>
                                <p className="small-text">FlavorChecks</p>
                            </div>
                            <div className="inner-box">
                                <p className="number-text">0</p>
                                <p className="small-text">Following</p>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        )
    }

}

export default Home;