import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Inbox from './Inbox';
import EmailContexFunc from './EmailContext';
import EachMsg from './EachMsg';

const LandingPage = () => {
    return (
        <div>
            <EmailContexFunc>
                <h1>My Mail Box</h1>
                <Link to={"/inbox"}>Inbox</Link>{' '}
                <Link>Sent</Link>
                <hr />
                <Routes>
                    <Route path='/inbox' element={<Inbox />} />
                    <Route path='/message/id/:msgId' element={<EachMsg />} />
                </Routes>
            </EmailContexFunc>
        </div>
    )
}

export default LandingPage