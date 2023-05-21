'use client';
import { Container, Grid, Stack, Typography } from "@mui/material";
import styles from '@/styles/authLayout.module.scss'
import commonStyles from '@/styles/common.module.scss'
// import { HeadBanner } from "@/assets";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface AuthLayoutProps {
    image?: string;
    children: React.ReactElement;
}

const AuthLayout = ({ image, children }: AuthLayoutProps) => {
    return (
        <>
            <Grid container className={styles.mainContainer}>
                <Grid item xs={12} md={6} display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
                    <Stack
                        sx={{
                            height: '100vh',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        {/* <Image src={HeadBanner} className={styles.authLayoutImage} /> */}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack className={commonStyles.formContainer}>
                        {children}
                        <Typography sx={{ marginY: '10px' }}> Don't have an account? <Link href='/auth/register'> Register here </Link> </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default AuthLayout;