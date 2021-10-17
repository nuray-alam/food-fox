import { useEffect, useState } from "react"

const useFoodData = () =>{

    const [foods, setFoods] = useState([])

    useEffect(() => {

        fetch('./foodData.json')
        .then(res => res.json())
        .then( data => setFoods(data))

    },[])

    return {
        foods,
        setFoods
    }

}

export default useFoodData;
