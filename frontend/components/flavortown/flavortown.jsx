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
        debugger
        const burgerForm = (
            <button onClick={() => this.props.openModal('burger')}
                className="burger-form">ADD A FLAVOR</button>
        );

        // restaurant = { this.props.restaurant.id }
        // const burgers = this.props.burgers.map((el) => {
        //     return <FlavortownIndexItem key={el.id}
        //         burger={el}  />
        // })

        return (
            <>
                <li>
                    {burgerForm}
                    {/* {burgers} */}
                </li>
            </>
        )
    }
}

export default FlavorTown