import React, { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().matches(
        /^\d{10}$/,
        'Contact number must be exactly 10 digits'
    ).required('Contact number is required'),
});

export const MyForm = () => {
    const [values, setValues] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [data, setData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        try {
            await validationSchema.validate(values, { abortEarly: false });
            setData([...data, values]);
            setErrors({});
        } catch (err) {
            const newErrors = err.inner.reduce((acc, error) => {
                acc[error.path] = error.message;
                return acc;
            }, {});
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Form</h2>
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', width: '100%' }}>
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="name" style={{ width: '150px', marginRight: '10px' }}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            style={{ flex: 1, padding: '10px', boxSizing: 'border-box' }}
                        />
                    </div>
                    {submitted && errors.name && <div style={{ color: 'red', marginTop: '5px' }}>{errors.name}</div>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="email" style={{ width: '150px', marginRight: '10px' }}>Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            style={{ flex: 1, padding: '10px', boxSizing: 'border-box' }}
                        />
                    </div>
                    {submitted && errors.email && <div style={{ color: 'red', marginTop: '5px' }}>{errors.email}</div>}
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label htmlFor="phone" style={{ width: '150px', marginRight: '10px' }}>Contact Number:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            style={{ flex: 1, padding: '10px', boxSizing: 'border-box' }}
                        />
                    </div>
                    {submitted && errors.phone && <div style={{ color: 'red', marginTop: '5px' }}>{errors.phone}</div>}
                </div>

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
            </form>

            {data?.length > 0 && (
                <table style={{ width: '100%', borderCollapse: 'collapse', maxWidth: '600px', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key} style={{ border: '1px solid #ddd', padding: '10px', backgroundColor: '#f4f4f4' }}>{key}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, i) => (
                                    <td key={i} style={{ border: '1px solid #ddd', padding: '10px' }}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}