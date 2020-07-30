import React from 'react'
import $ from 'jquery'

class TicketForm extends React.Component {
    constructor() {
        super();
        this.state = {
            ticketID: '',
            bugShort: '',
            bugLong: '',
            createdDate: new Date().toLocaleDateString("en-US"),
            status: 'Open', //defaults all tickets to open to start
            severity: '',
            repoducable: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    formChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const listBody = document.querySelector('.listBody');
        const newTR = document.createElement('tr');
        newTR.classList.add('node');
        const tickInc = document.querySelector('.listBody').lastChild;
        const numInc = tickInc.firstChild.innerText;
        let addedUp = parseFloat(numInc) + 1;
        if(isNaN(addedUp)) {
            addedUp = 1;
        }
        const tID = addedUp;
        const short = this.state.bugShort;
        const long = this.state.bugLong;
        const cDate = this.state.createdDate;
        const status = this.state.status;
        const severity = this.state.severity;
        const reproduce = this.state.repoducable;
        listBody.appendChild(newTR);
        newTR.innerHTML = `<td class="idNum">${tID}</td>
                            <td class="bugDesc">${short}</td>
                            <td class="bugFullDes hdn">${long}</td>
                            <td><button class="ticketModal">Details</button></td>
                            <td>${cDate}</td>
                            <td class="bugStatus"><p class="statusP">${status}</p></td>
                            <td>${severity}</td>
                            <td>${reproduce}</td>
                            <td><button class="deleteRow"><img src=${require('./img/delete.png')} alt="" /></button></td>`;

        listBody.appendChild(newTR);
        this.emptyChecker();
        alert('Your new ticket has been added!');
        this.closePanel();
            
        //clear form
        this.setState({
            ticketID: '',
            bugShort: '',
            bugLong: '',
            createdDate: new Date().toLocaleDateString("en-US"),
            status: 'Open', //defaults all tickets to open to start
            severity: '',
            repoducable: ''
        }); 
    }
    emptyChecker() {
        let nodes = $('.node');
        let emptyNotice = $('.empty');
        if(nodes.length === 1) {
            emptyNotice.show();
        } else {
            emptyNotice.hide();
        }
    }
    closePanel() {
        let formPanel = document.querySelector('.ticketForm');
        formPanel.classList.toggle('active');
    }
    componentDidUpdate() {       
        function statusColor() {
            let currentStatus = $('.statusP');
            let i;
            for (i = 1; i < currentStatus.length; i++) {
                switch (currentStatus[i].textContent) {
                    case "Open":
                        currentStatus[i].classList.add('greenStatus');
                        currentStatus[i].classList.remove('blackStatus');
                        currentStatus[i].classList.remove('orangeStatus');
                        break;
                    case "Closed":
                        currentStatus[i].classList.add('blackStatus');
                        currentStatus[i].classList.remove('orangeStatus');
                        currentStatus[i].classList.remove('greenStatus');
                        break;
                    case "In Progress":
                        currentStatus[i].classList.add('orangeStatus');
                        currentStatus[i].classList.remove('blackStatus');
                        currentStatus[i].classList.remove('greenStatus');
                        break;
                        default:
                            console.log('status colors are defaulting')
                }
            }
        }
        statusColor();
        //count tickets, display count by status
        function ticketCounter() {
            let setOpen = $('.listBody .greenStatus').length;
            let setProgress = $('.listBody .orangeStatus').length;
            let setClosed = $('.listBody .blackStatus').length;
            $('.openT')[0].textContent = setOpen;
            $('.progressT')[0].textContent = setProgress;
            $('.closedT')[0].textContent = setClosed;
        }
        ticketCounter();
        //row delete button
        $('.deleteRow').click(function(e) {
            e.target.parentNode.parentNode.parentNode.remove();
            //check for empty list
            let nodes = $('.node');
            let emptyNotice = $('.empty');
            if(nodes.length === 1) {
                emptyNotice.show();
            } else {
                emptyNotice.hide();
            }
            ticketCounter();
        });
        //close modal
        $('.close').click(function() {
            let modal = document.getElementById("myModal");
            modal.style.display = "none";
            $('#upStatus').hide();
            $('.topTicket .statusP').show();
        });
        //populate modal with ticket info
        $('.ticketModal').click(function(e) {
            let modal = document.getElementById("myModal");
            modal.style.display = "block";
            let dataPull = e.target.parentNode.parentNode.childNodes;
            let data0 = dataPull[0].innerText; //id number
            let data1 = dataPull[2].innerText; //short des
            let data2 = dataPull[4].innerText; //long des
            let data3 = dataPull[8].innerText; //date
            let data4 = dataPull[10].innerText; //status
            let data5 = dataPull[12].innerText; //severity
            let data6 = dataPull[14].innerText; //reproducable 
            //update ticket modal with ticket info
            document.querySelector(".indexSpan").textContent = data0;
            document.querySelector(".shortDes").textContent = data1;
            document.querySelector(".longDes").textContent = data2;
            document.querySelector(".tDate").textContent = data3;
            document.querySelector(".topTicket .statusP").textContent = data4;
            document.querySelector(".severitySpan").textContent = data5;
            document.querySelector(".repSpan").textContent = data6;

            //change status button
            $('.edTicket').click(function() {
                $('#upStatus').show();
                $('.topTicket .statusP').hide();                
            });
            //status dropdown
            $('#upStatus').change(function(e) {
                $('#upStatus').hide();
                $('.topTicket .statusP').show();
                $('.topTicket .statusP')[0].textContent = e.target.value;
                let ticketIndex = $('span.indexSpan')[0].textContent;
                let findElement = $('.node .idNum:contains("' + ticketIndex + '")').parent();
                findElement[0].childNodes[10].childNodes[0].textContent = e.target.value;
                statusColor();
                ticketCounter();
            });

            window.onclick = function(event) {
                if (event.target === modal) {
                modal.style.display = "none";
                }
            }
        });
        
      }  
    render() {
        return (
            <>
            <div className="ticketForm">
                <div className="formWrap">
                    <button className="closeMe" onClick={this.closePanel}><img src={require('./img/close.png')} alt="" /></button>
                    <h2>New Ticket Form</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label><p>Short Description</p></label>
                        <input 
                            type="text" 
                            name="bugShort"
                            placeholder="..." 
                            value={this.state.bugShort}
                            onChange={e => this.formChange(e)} 
                        />
                        <label><p>Full Description</p></label>
                        <textarea 
                            name="bugLong" 
                            value={this.state.bugLong} 
                            onChange={e => this.formChange(e)}
                        />
                        <label><p>Severity Level</p></label>
                        <select name="severity" value={this.state.severity} onChange={e => this.formChange(e)} >
                            <option defaultValue value="null">Select An Option</option>
                            <option value="Low">Low</option>
                            <option value="Moderate">Moderate</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                        <label><p>Is the bug reproducable?</p></label>
                        <select name="repoducable" value={this.state.repoducable} onChange={e => this.formChange(e)} >
                            <option defaultValue value="null">Select An Option</option>
                            <option value="Rarely">Rarely</option>
                            <option value="Occasional">Occasionaly</option>
                            <option value="Mostly">Mostly</option>
                            <option value="Always">Always</option>
                        </select>
                        <input type="submit" value="Submit" className="submitBtn" />
                    </form>
                </div>
            </div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close"><img src={require('./img/close.png')} alt="" /></span>
                    <div className="topTicket">
                        <div className="groupedUp">
                            <h2 className="tID">Ticket #<span className="indexSpan"></span></h2>
                            <h2 className="tDate">Today</h2>
                        </div>
                        <p className="statusP">In Progress</p>
                        <select id="upStatus" className="" name="query">
                            <option></option>
                            <option value="Open" id="a">Open</option>
                            <option value="In Progress" id="b">In Progress</option>
                            <option value="Closed" id="c">Closed</option>
                        </select>
                    </div>
                    <h4 className="shortDes">The App is not yet finished.</h4>                   
                    <p className="longDes">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="repro">Reproducability: <span className="repSpan">Always</span></p>
                    <p className="severity">Severity: <span className="severitySpan">Always</span></p>
                    <button className="edTicket">Update Status</button>
                    <br />
                    <br />
                </div>
            </div> 
            </>
        )
    }
}
export default TicketForm