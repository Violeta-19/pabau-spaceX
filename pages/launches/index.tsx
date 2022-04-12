import Head from "next/head";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import Layout from "../../components/layout";
import { Stack } from "@mui/material";

const PAST_LAUNCHES = gql`
  query GetLaunches {
            launchesPast(limit: 12) {
              id
              mission_name
              launch_date_local
              launch_site {
                site_name_long
              }
              links {
                article_link
                video_link
                mission_patch
              }
              rocket {
                rocket_name
                first_stage {
                  cores {
                    flight
                    core {
                      reuse_count
                      status
                    }
                  }
                }
              }
              ships {
                name
                image
              }
              details
            }
          }
`;

const Launches: FC = () => {
    const { loading, error, data } = useQuery(PAST_LAUNCHES);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <Layout pageTitle="Latest Launches">
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
            >
                <Link href={{
                    pathname: "/",
                }}
                ><Button variant="contained">Go to home</Button></Link>
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
                    {data.launchesPast.map((launch) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <Grid item xs={3} key={launch.id}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={
                                            launch?.ships.length
                                                ? launch.ships[0].image
                                                : "https://picsum.photos/seed/picsum/200/300"
                                        }
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {launch.mission_name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {launch.launch_date_local}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {launch.details?.slice(0, 100).concat("...")}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Link
                                            href={{
                                                pathname: "/launches/[id]",
                                                query: { id: launch.id },
                                            }}
                                        >
                                            <Button size="small">Learn More</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </Layout>
    );
}

export default Launches