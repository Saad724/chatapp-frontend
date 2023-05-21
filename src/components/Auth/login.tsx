import AuthLayout from "@/components/Layout/AuthLayout";
import { Button, Checkbox, Container, Stack, TextField, FormControlLabel, Typography, IconButton } from "@mui/material";
import styles from '@/styles/common.module.scss'
import Link from 'next/link'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from "react";
// import AppLogo from '@/components/AppLogo'

interface LoginProps {
    authLink?: any;
}

const Login = ({ authLink }: LoginProps) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            {/* <AppLogo /> */}
            <Typography variant="h5" color={'primary'} sx={{ fontWeight: 'bold' }}> Login </Typography>
            <form className={styles.authForm}>
                <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    variant="outlined"
                    sx={{ marginY: '10px' }}
                />
                <TextField
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    label="Password"
                    variant="outlined"
                    InputProps={{
                        endAdornment: <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}</IconButton>
                    }}
                    sx={{ marginY: '10px' }}
                />
                <Stack
                    direction={'row'}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox />}
                        label={<Typography> Remember Me </Typography>}
                    />
                    {/* <Link href="/auth/forgot-password"> <Typography> Forgot password? </Typography></Link> */}
                </Stack>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ marginY: '10px' }}
                > Login </Button>
            </form>
        </>
    );
}

export default Login;