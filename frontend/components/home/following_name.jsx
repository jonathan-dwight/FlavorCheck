import React from "react";

const FollowingName = (props) => {
    if (!props) return null;
    return (
        <p> {props.name} </p>
    )
}

export default FollowingName;