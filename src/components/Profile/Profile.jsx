import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';




function Profile() {
    const report = useSelector((store) => store.report);
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_REPORTS' });
    // }, []);
    // const gearR = (id) => {
    //     history.push(`/reports/${id}`)
    // }

    return (
        <div className="container">
            <h2>Welcome {user.username} !</h2>
            <h3>Your Reports :</h3>
            <p>Reports will be here!</p>

            {/* <div className='ReportList'>
                {report.map(eachReport => {
                    return (
                        <div className='ReportItem' key={eachReport.id} >
                            <h3>{eachReport.id}</h3>
                            <p>{eachReport.interaction_date}</p>
                            <p>{eachReport.interaction_summary}</p>
                            <button onClick={() => gearR(eachReport.id)}>Details</button>
                        </div>
                    );
                })}
            </div > */}
        </div >
    );
}

export default Profile;
