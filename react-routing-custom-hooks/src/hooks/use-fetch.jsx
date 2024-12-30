import React, { useEffect, useState } from 'react'

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchData() {
        setLoading(true);

        try {
            const res = await fetch(url, { ...options });
            if (!res.ok) {
                throw new Error(res.statusText);
            }

            const data = await res.json();
            if (data) {
                setData(data);
                setError(null);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        data,
        loading,
        error
    }
}

export default useFetch;
