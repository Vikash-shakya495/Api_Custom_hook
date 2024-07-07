import { useEffect } from "react";

function useFetch(key, setData, isError) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/photos`);
                const json = await response.json();
                console.log(json);
                setData(json.map(item => item[key]));
            } catch (error) {
                console.error("Error fetching data:", error);
                isError();
            }
        };

        fetchData();
    }, [key]);
}

export default useFetch;
