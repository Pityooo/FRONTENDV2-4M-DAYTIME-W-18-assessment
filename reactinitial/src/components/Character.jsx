import React, {useState} from 'react';
import Button from '@mui/material/Button';

function Character(props) {
    let [details, setDetails] = useState(false);
    return (
        <>
        <div>
            <p>{props.name}</p>
            {details && <p>{props.details}</p>}        
        </div>
        <Button variant="contained" onClick={() => setDetails(!details)}>{details ? "Show less" : "Show more"}</Button>
        </>
    )
}
export default Character