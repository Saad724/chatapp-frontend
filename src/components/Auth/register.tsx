import AuthLayout from "@/components/Layout/AuthLayout";
import { Button, Checkbox, Container, Stack, TextField, FormControlLabel, Typography, IconButton } from "@mui/material";
import styles from '@/styles/common.module.scss'
import Image from "next/image";
// import { Logo } from "@/assets";
import Link from 'next/link'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
// import AppLogo from "@/components/AppLogo";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            {/* <AppLogo /> */}
            <Typography variant="h5" color={'primary'} sx={{ fontWeight: 'bold' }}> Register </Typography>
            <form className={styles.authForm}>
                <Stack direction={'row'} spacing={1} className={styles.formFieldsStack}>
                    <TextField
                        fullWidth
                        type="text"
                        label="First Name*"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        type="text"
                        label="Last Name*"
                        variant="outlined"
                    />
                </Stack>
                <Stack direction={'row'} spacing={1} className={styles.formFieldsStack}>
                    <TextField
                        fullWidth
                        type="email"
                        label="Email*"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        type="text"
                        label="User Name*"
                        variant="outlined"
                    />
                </Stack>
                <Stack direction={'row'} spacing={1} className={styles.formFieldsStack}>
                    <TextField
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        label="Password"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}</IconButton>
                        }}
                    />
                    <TextField
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        label="Confirm Password"
                        variant="outlined"
                        InputProps={{
                            endAdornment: <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}</IconButton>
                        }}
                    />
                </Stack>
                <Button
                    variant="contained"
                    fullWidth
                    sx={{ marginY: '10px' }}
                > Register </Button>
            </form>
            <Typography sx={{ marginY: '10px' }}> Already have an account? <Link href='/auth/login'> Login here </Link> </Typography>
        </>
    );
}

export default Register;