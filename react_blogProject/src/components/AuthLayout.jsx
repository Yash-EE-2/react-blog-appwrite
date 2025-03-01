import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        if (authStatus === undefined) return; // Wait until authStatus is defined

        if (authentication && !authStatus) {
            navigate("/login");
        } else if (!authentication && authStatus) {
            navigate("/");
        }

        setLoading(false);
    }, [authStatus, navigate, authentication]);

    return loading ? <h1>Loading...</h1> : <>{children}</>;
}
