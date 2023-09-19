import axios from "axios";
import { useEffect, useState } from "react";


const Phones = () => {
    const [phones, setPhones] = useState([])

    

    useEffect(() => {
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone#data")
        // .then(response => response.json())
        // .then(data => setPhones(data.data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone#data')
        .then(data => {
            const phoneData = data.data.data;
            setPhones(phoneData)

        })
      },[])

    return (
        <div>
           <h2 className="text-2xl text-white font-bold">Phones:{phones.length}</h2>
        </div>
    );
};

export default Phones;