import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    const style = {
        fontSize: '12px'
    }
    return (
        <div className="output">
            <p>User name: {props.userName}</p>
            <p style={style}>Isto é apenas um teste com um segundo paragrafo</p>
        </div>
    );
}

export default userOutput;