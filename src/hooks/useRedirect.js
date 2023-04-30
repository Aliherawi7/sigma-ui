import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function useRedirect() {
    const state = useSelector(state => state.authentication)
    const navigate = useNavigate();
    useEffect(() => {
        if (!state.isAuthenticated) {
            navigate("/login")
        }
    }, [])
}

export default useRedirect;