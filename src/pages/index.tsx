import React from 'react'
// MUI
import { Typography } from "@mui/material"

// Components
import Login from "@/components/Auth/login"
import AuthLayout from '@/components/Layout/AuthLayout';
import Register from '@/components/Auth/register';

// Styles

const Home = () => {
    return (
        <>
            <AuthLayout>
                <Register />
            </AuthLayout>
        </>
    );
}

export default Home;