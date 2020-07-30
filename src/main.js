import React from 'react'
import SideBar from './side'
import Inner from './inner'

class Main extends React.Component {
 
    render() {
        return (
            <>
            <div className="mainContent">
                <SideBar />
                <Inner />
            </div>
            </>
        )
    }
}

export default Main