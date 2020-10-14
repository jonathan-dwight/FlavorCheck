import React from "react";


const footerLinks = () => {
    
    const linkedIn = "https://www.linkedin.com/in/jd-buendia-66ab7483/"
    const github = "https://github.com/jonathan-dwight"

    return (
        <>
            <div className="image-box">
                <a href={linkedIn}>
                    <img src={window.linkedIn} className="footer-single-1"/>
                </a>
                <a href={github}>
                    <img src={window.github} className="footer-single" />
                </a>
            </div>
        </>
    )
}


export default footerLinks;