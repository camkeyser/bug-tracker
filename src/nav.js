import React from 'react'

function NavBar() {
    return (
        <div className="nav">
            <div className="navMain">
                <div className="logoBox">
                    <img src={require('./img/logo.png')} className="logo" alt=""/>
                </div>
                <ul className="navList">
                    <li><h3>Bug Tracker App</h3></li>
                    {/* <li>Home</li>
                    <li>All Tickets</li>
                    <li>Stats</li>
                    <li>Settings</li> */}
                </ul>
            </div>
            <div className="navIcons">
                <ul className="iconList">
                    <li><img src={require('./img/add.png')} alt="Create Ticket" title="Create Ticket" /></li>
                    <li><img src={require('./img/search.png')} alt="Search" title="Search" /></li>
                    <li><img src={require('./img/alert.png')} alt="Alerts" title="Alerts" /></li>
                    <li><img src={require('./img/tools.png')} alt="Settings" title="Settings" /></li>
                    <li><img src={require('./img/avatar.png')} className="avatar" alt="My Account" title="My Account" /></li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar