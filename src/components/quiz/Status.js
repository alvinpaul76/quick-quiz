import { MdPlaylistAddCheck as ListIcon, } from 'react-icons/md';
import { IoAlarmOutline as TimerIcon } from 'react-icons/io5';
import { Fragment } from 'react';

function QuestionsCompleted() {
    return ( 
        <Fragment>
            <span>
                <span className="status-icon-left">
                    <ListIcon />
                </span>
                <span href="#">
                    1 of 15
                </span>
            </span>
        </Fragment>
    )
}

function Timer() {
    return ( 
        <Fragment>
            <span>
                <span href="#">
                    01:29
                </span>
                <span className="status-icon-right">
                    <TimerIcon />
                </span>
            </span>
        </Fragment>
    )
}

function Status() {
    return (
        <Fragment>   
            <div className="status-container">
                <QuestionsCompleted />
                <Timer />
            </div>
        </Fragment>    
    )
}

export default Status;