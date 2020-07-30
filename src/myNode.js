import React from 'react'

function MyNode() {

    return (
        <div className="nodeBox myNode">
            <div className="userHeading">
                <img src="https://camkeyser.github.io/dash/img/m5.jpg" alt=""/>
                <div className="stacked">
                    <h5 className="nameh5">John Smith</h5>
                    <h5 className="posh5">IT Consultant</h5>
                </div>
            </div>
            <hr/>
            <h3>Current Tickets</h3>
            <div className="ticketSummary">
                <div className="tickNode">
                    <h4 className="ot">Open:</h4>
                    <p className="opent">0</p>
                </div>
                <div className="tickNode">
                    <h4 className="ipt">In Progress:</h4>
                    <p className="inprogresst">0</p>
                </div>
                <div className="tickNode">
                    <h4 className="ct">Closed:</h4>
                    <p className="closedt">0</p>
                </div>
            </div>
        </div>
    )
}

export default MyNode