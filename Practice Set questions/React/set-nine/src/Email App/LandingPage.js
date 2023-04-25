import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Inbox from './Inbox';
import EmailContexFunc from './EmailContext';
import EachMsg from './EachMsg';
import Sent from './Sent';

const LandingPage = () => {
    return (
        <div>
            <EmailContexFunc>
                <h1>My Mail Box</h1>
                <Link to={"/inbox"}>Inbox</Link>{' '}
                <Link to={"/sent"}>Sent</Link>
                <hr />
                <Routes>
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/sent' element={<Sent />} />
                    <Route path='/message/id/:msgId' element={<EachMsg />} />
                </Routes>
            </EmailContexFunc>
        </div>
    )
}

export default LandingPage