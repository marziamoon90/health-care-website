import { useEffect, useState } from 'react';

const useTherapy = () => {
    const [therapy, setTherapy] = useState([])

    useEffect(() => {
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setTherapy(data))
    }, [])

    return therapy;
};

export default useTherapy;