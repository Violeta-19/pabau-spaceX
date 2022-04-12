import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/layout";
import { Button, Stack } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";

function HomePage() {
    return (
        <Layout pageTitle="SpaceX Launches">
            <CardMedia
                component="img"
                height="140"
                image={"https://media-exp1.licdn.com/dms/image/C4E16AQEQavUKXiZs1g/profile-displaybackgroundimage-shrink_350_1400/0/1570807563111?e=1655337600&v=beta&t=J_fzEEg6dma0CIIXUWWEVh8Q56y_QWTdomlBG-LnmQA"
                }
                alt="green iguana"
            />
            <p className={styles.description}>Go look latest launches from spaceX</p>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Link href={{
                    pathname: "/launches",
                }}
                ><Button variant="contained">Go to Launches</Button></Link>
            </Stack>
        </Layout>
    )
}

export default HomePage