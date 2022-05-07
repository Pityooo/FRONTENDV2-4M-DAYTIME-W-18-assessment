import React, { useEffect, useState } from "react"
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const App = () => {

    let [loading, setLoading] = useState(false);
    let [apis, setApis] = useState([]);
    let [sub, setSub] = useState(false);

    const fetchApi = async() => {
        //const res = await fetch('https://seriescharacters.com/api/howimetyourmother');
        const res = await fetch('https://demoapi.com/api/series/howimetyourmother');
        const resJson = await res.json();
        setApis(resJson);
        setLoading(false);
        setTimeout(() => {
            setSub(true);
        }, 10000);
    };

    useEffect(() => {
        setLoading(true);
        fetchApi();
    }, []);

    return (
        <>
        {loading ? <LoadingMask/> :
        <>
        <h1>Series Api</h1>
        {apis.map((api,i) => <Character key={i} name={api.name} details={api.details}/> )}
        </>
        }
        {sub && <Subscription/>}
        </>
    )
}
export default App