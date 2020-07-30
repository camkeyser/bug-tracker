import React from 'react'

function BugList() {

    return(
        <div className="bugFeed hdn">
            <table>
                <thead>
                    <tr className="tableHeader">
                        <th>Ticket ID</th>
                        <th className="bugDesc">Bug</th>
                        <th></th>
                        <th>Date Created</th>
                        <th>Status</th>
                        <th>Severity</th>
                        <th>Reproducable?</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="listBody">
                    <tr className="node hdn">
                        <td className="idNum"></td>
                        <td className="bugDesc"></td>
                        <td><button></button></td>
                        <td></td>
                        <td className="bugStatus"><p className="statusP"></p></td>
                        <td></td>
                        <td></td>
                        <td><button className="deleteRow"></button></td>
                        <td className="hdn"></td>
                    </tr>
                </tbody>
            </table>
            <div className="empty">You have no tickets in queue! Good Job!</div>
        </div>
    )
}
export default BugList