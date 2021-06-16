import axios from "axios";
import {useState, useEffect} from "react";
import {API_HOST, API_KEY} from "./constants";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');


    useEffect(() => {
        axios
            .get('/planetary/apod', {
                baseURL: `https://${API_HOST}`,
                params: {
                    'api_key': API_KEY,
                    'count': 6
                }
            })
            .then(res => setData(res.data))
            .catch(e => setError(e.message))

    }, [])

    return {
        data, error
    }
}

export default useFetch;