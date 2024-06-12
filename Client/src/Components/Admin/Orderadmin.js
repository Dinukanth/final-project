import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Admin/Orderadmin.css';

const AdminOrderDetails = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3004/mech/getAllOrders');
                setOrders(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch orders', error);
                setError('Failed to fetch orders');
                setLoading(false);
            }
            };

        fetchOrders();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Order Details</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Mechanic Name</th>
                        <th>User Name</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.mechanicName}</td>
                            <td>{order.userId}</td>
                            <td>{new Date(order.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminOrderDetails;
