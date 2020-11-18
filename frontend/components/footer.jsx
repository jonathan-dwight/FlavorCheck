import React from "react";


const footerLinks = () => {
    
    const linkedIn = "https://www.linkedin.com/in/jd-buendia-66ab7483/";
    const github = "https://github.com/jonathan-dwight";
    const angelList = "https://angel.co/u/jd-buendia";

    return (
        <>
            <div className="footer">
                <div className="image-box">
                    <a href={linkedIn} target="_blank">
                        <img src={window.linkedIn} className="footer-single-1"/>
                    </a>
                    <a href={github} target="_blank">
                        <img src={window.github} className="footer-single" />
                    </a>
                    <a href={angelList} target="_blank">
                        <img src={window.angelist} className="footer-single" />
                    </a>
                </div>
            </div>
        </>
    )
}


export default footerLinks;