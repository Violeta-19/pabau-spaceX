import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import Layout from "../../components/layout";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

const buildQuery = (id) => {
    return gql`
    query {
        launch(id: ${id}) {
            details
            is_tentative
            mission_name
            rocket {
                rocket_name
            }
            links {
                article_link
            }
            launch_site {
                site_name
            }
            launch_date_local
            ships {
                image
                weight_kg
            }
            launch_year
        }
    }
  `;
}

const Launch: FC = () => {
    const router = useRouter()
    const { id } = router.query

    const { loading, error, data } = useQuery(buildQuery(Number(id)));
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :( {error.networkError.message}</p>;
    return (
        <Layout pageTitle={data.launch.mission_name}>
            <Stack
                direction="column"
                spacing={2}
                justifyContent="center"
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={
                        data.launch?.ships.length
                            ? data.launch.ships[0].image
                            : "https://picsum.photos/seed/picsum/200/300"
                    }
                    alt="green iguana"
                />
                <Typography variant="body2" color="text.primary">
                    {data.launch.rocket.rocket_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.launch.details}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.launch.ships.weight_kg}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    Launched on {data.launch.launch_date_local}
                </Typography>
                <Typography variant="body2" color="#0000FF">
                    {data.launch.links.article_link}
                </Typography>
            </Stack>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Link href={{
                    pathname: "/",
                }}
                >
                    <Button variant="contained">Go to home</Button>
                </Link>
            </Stack>
            <Box sx={{ width: "100%" }}>
                <Grid
                    sx={{
                        pt: 3,
                    }}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                </Grid>
            </Box>
        </Layout>
    );
}

export default Launch