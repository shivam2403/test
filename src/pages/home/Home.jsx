import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './home.css';
import Card from '../components/card/Card';

const Home = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            // console.log(res.data);
            setData(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    console.log(data);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='hm'>
            {data.map((d) => (
                <Card key={d.show.id} show={d.show} /> 
            ))}
        </div>
    );
};

export default Home;
