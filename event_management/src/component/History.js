import React, { useEffect, useState } from 'react';
import { getcontactdata } from '../Service/Api';

const History = () => {
    const [contactData, setContactData] = useState([]); // State to store fetched data
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getcontactdata(); // Fetch data
                setContactData(result); // Save fetched data to state
                console.log(result); // Log the fetched data
            } catch (error) {
                console.error("Error fetching contact data:", error.message);
            } finally {
                setLoading(false); // Stop loading after data fetch
            }
        };

        fetchData();
    }, []); // Runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>; // Display a loading message while data is being fetched
    }

    if (!contactData || contactData.length === 0) {
        return <div>No data available</div>; // Handle case when no data is fetched or array is empty
    }

    return (
        <>
            {contactData.map((item, index) => (
                <div key={index} className="w-[35%] h-[30vh] bg-red-500 m-96">
                    <h1>Name: {item.fname}</h1>
                    <p>Email: {item.email}</p>
                    <p>Phone: {item.phone}</p>
                </div>
            ))}
        </>
    );
};

export default History;
