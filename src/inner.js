import React from 'react'
import BugList from './buglist'
import TicketForm from './ticketform'
import Dash from './dash'
import $ from 'jquery'

class Inner extends React.Component {

    newTicket() {
        let formPanel = document.querySelector('.ticketForm');
        formPanel.classList.toggle('active');
    }

    componentDidMount() {
        function ticketCounter() {
            let setOpen = $('.listBody .greenStatus').length;
            let setProgress = $('.listBody .orangeStatus').length;
            let setClosed = $('.listBody .blackStatus').length;
            $('.openT')[0].textContent = setOpen;
            $('.progressT')[0].textContent = setProgress;
            $('.closedT')[0].textContent = setClosed;
        }
        ticketCounter();
    }

    render() {
        return (
            <>
            <div className="innerContent">
                <div className="mainHeader hdn">
                    <div className="mainText">
                        <h2>All Tickets</h2>
                    </div>
                    <div className="ticketCount">
                        <h3 className="ticketGreen">Open: <span className="openT"></span></h3>
                        <h3 className="ticketOrange">In Progress: <span className="progressT"></span></h3>
                        <h3 className="ticketBlack">Closed: <span className="closedT"></span></h3>
                    </div>
                    <div className="mainIcons">
                        <button className="iconT" onClick={this.newTicket}>Submit Bug</button>
                        <button className="iconI"><img src={require('./img/filter.png')} alt="" /></button>
                        <button className="iconI"><img src={require('./img/dots.png')} alt="" /></button> 
                    </div>
                </div>   
                <BugList /> 
                <Dash /> 
            </div>
            <TicketForm />
            </>
        )
    }
}

export default Inner