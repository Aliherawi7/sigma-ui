import react, {useState, useEffect} from 'react'

function useFetch(url, options, dependency=null) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        (async function () {
            try {
                setLoading(true);
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                if (response.ok && response.status >= 300) {
                    throw new Error("something went wrong, you may forgot something")
                }
                if (response.ok && response.status == 204) {
                    setData([])
                    return;
                }
                
                const responseData = await response.json();
                setData(responseData)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        })()

    }, [url, dependency])

    return { data, error, loading, setData }
}

export default useFetch
