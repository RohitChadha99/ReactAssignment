import React, { useState } from "react";

const Table = () => {
    const [data, setData] = useState();

    const fetchData = async () => {
        const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data1 = await response.json();
        setData(data1.data); 
    }

    const handleClear = () => {
        setData(null)
    }

    return (
        <>
            <button onClick={fetchData} style={{margin: "5px", padding: "3px"}}>Fetch Data</button>
            <button onClick={handleClear} style={{margin: "5px", padding: "3px"}}>Clear</button>
            {data?.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, i) => (
                                    <td key={i}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Table;