import React, {useState, useEffect} from 'react';

const Loading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async() => {
            await new Promise((r) => setTimeout(r, 1000));
            setLoading((loading) => !loading);
        };
        loadData()
    }, []);

    return loading;
}

export default Loading;