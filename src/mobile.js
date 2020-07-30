import React from 'react'

function Mobile() {
    return (
        <div className="mobileNotice">
            <div className="boxed">
                <img src={require('./img/sadness.png')} className="sadFace" alt=""/>
                <h2>This app was designed and optimized to be viewed from a desktop computer. We apologize for this inconvenience.</h2>
            </div>
        </div>
    )
}

export default Mobile