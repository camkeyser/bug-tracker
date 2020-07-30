import React from 'react'
import MyNode from './myNode'
import Weather from './weather'
import Announcments from './announcements'
import News from './news'

function Dash() {

        return (
            <div className="dashStuff">
                <div className="dashHeading">
                    <h2>My Dashboard</h2>
                </div>
                <div className="nodeRow">
                    <MyNode />
                    <Weather />
                    <Announcments />
                    <News />
                </div>
            </div>
        )
}

export default Dash 