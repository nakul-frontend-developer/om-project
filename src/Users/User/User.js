import React from 'react';
import {Helmet} from 'react-helmet';


const User = ({ match }) => {
    return (
        <div>
            <Helmet>
            <title>{match.url}</title>
            </Helmet>
            <h5>User Details</h5>
            <p>User ID : {match.params.userID}</p>
        </div>
    )
}


export default User;