import React from 'react';

const removeBurger = (props) => {
    
    return(
        <>
            <div>ARE YOU SURE YOU WANT TO REMOVE YOUR FLAVOR?? Your FlavorCheck 
                will be gone forever!
            </div>
            <button onClick={() => props.processForm(props.burgerId).then(()=> {
                props.closeModal()
            })}>Remove Flavor :/</button>
        </>

    )
    
}

export default removeBurger;