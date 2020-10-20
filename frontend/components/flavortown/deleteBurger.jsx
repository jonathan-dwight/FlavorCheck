import React from 'react';

const removeBurger = (props) => {
    
    return(
        <>
            <div className="delete-form">
                <div className="delete-header">
                    <h2 className="delete-header-text">Confirm Flavor Deletion</h2>
                    <div onClick={props.closeModal} className="close-x-burger">X</div>
                </div>
                <div className="delete-text-box">
                    <div className="delete-text">ARE YOU SURE YOU WANT TO REMOVE YOUR FLAVOR?? Your FlavorCheck 
                        will be gone forever!
                    </div>
                </div>
                <button className="delete-post-button" onClick={() => props.processForm(props.burgerId).then(()=> {
                    props.closeModal()
                })}>REMOVE FLAVOR :/</button>
            </div>
        </>

    )
    
}

export default removeBurger;