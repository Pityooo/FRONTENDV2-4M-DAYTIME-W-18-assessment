import React, {useState} from 'react';
import LoadingMask from './LoadingMask';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Subscription() {

  let [input, setInput] = useState('');
  let [loader, setLoader] = useState(false);
  let [modul, setModul] = useState(true);
  let [response, setResponse] = useState(false);
  let [component, setComponent] = useState(true);

    const subscribe = (e) => {
        e.preventDefault();
        fetch('https://demoapi.com/api/series/newsletter', {
            method: "POST",
            body: JSON.stringify({
                "email": input
            })
        })
        .then(res => {
            setResponse(true);
            setLoader(false);
            setTimeout(() => {
                setComponent(false);
            }, 5000);
        })
        setLoader(true);
        setModul(false);
    };

    return (
        <>
        {component ? 
        <form>
            <h1>Subscribe to our newsletter</h1>
            {loader && <LoadingMask/>}
            {response && <h1>Subscribed</h1>}
            {modul && <>
                <TextField id="outlined-basic" type="email" label="e.g. what@user.wrote" variant="outlined" onChange={({target}) => setInput(target.value)}/>
                <Button variant="contained" onClick={subscribe} disabled={input.includes('@') && input.includes('.') && input.length >= 5 ? false : true}>Click</Button>
            </>}
        </form> : null
        }    
        </>
    )
}
export default Subscription