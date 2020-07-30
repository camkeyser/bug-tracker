import React from 'react'
import $ from 'jquery'

function SideBar() {

    function showDashboard() {
        $('.dashStuff').removeClass('hdn');
        $('.mainHeader').addClass('hdn');
        $('.bugFeed').addClass('hdn');
        $('.showDash').addClass('activeIcon');
        $('.showTickets').removeClass('activeIcon');

        // set ticket counter on dashboard
        let setOpen = $('.listBody .greenStatus').length;
        let setProgress = $('.listBody .orangeStatus').length;
        let setClosed = $('.listBody .blackStatus').length;
        $('.opent')[0].textContent = setOpen;
        $('.inprogresst')[0].textContent = setProgress;
        $('.closedt')[0].textContent = setClosed;

    }
    function showTickets() {
        $('.dashStuff').addClass('hdn');
        $('.mainHeader').removeClass('hdn');
        $('.bugFeed').removeClass('hdn');
        $('.showDash').removeClass('activeIcon');
        $('.showTickets').addClass('activeIcon');
    }
    $('.tickBTN').click(showTickets);
    
    return (
        <div className="sideBar">
            <ul className="sideList">
                <li className="showDash activeIcon" onClick={showDashboard}>
                    <img src={require('./img/dashboard.png')} className="sideIcon" alt=""/>
                    <p>Dashboard</p>
                </li>
                <li className="showTickets"  onClick={showTickets}>
                    <img src={require('./img/tickets.png')} className="sideIcon" alt=""/>
                    <p>Tickets</p>
                </li>
                <hr className="sideHR" />
                <li className="settingsIcon">
                    <img src={require('./img/tools.png')} className="sideIcon" alt=""/>
                    <p>Settings</p>
                </li>
            </ul>
        </div>
    )
}

export default SideBar