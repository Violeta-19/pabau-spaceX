import Head from 'next/head'
import React from 'react'

import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material'
import { Copyright } from '@mui/icons-material'

interface Props {
    pageTitle: string
    children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ pageTitle = '', children }) => {
    return (
        <>
            <Head>
                <title>{pageTitle} &ndash;</title>
                <meta name="description" content="Code for Pabau job application" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container maxWidth="lg">
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 3,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {pageTitle}
                        </Typography>
                    </Container>
                </Box>
                {children}
            </Container>
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </Box>
        </>
    )

}
export default Layout
