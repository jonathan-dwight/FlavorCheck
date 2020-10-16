import React from "react";
import FlavortownIndexItem from "./flavortown_index_item"


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
                burger={el}  restaurants={this.props.restaurants} users={this.props.users}/>
            })

        return (
            <>
                <li>
                    {burgerForm}
                    {burgers}
                </li>
            </>
        )
    }
}

export default FlavorTown