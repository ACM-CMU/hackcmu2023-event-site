import '../styles/Prizes.css'
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material'

const Prizes = () => { 
    return (  
        <div className="prizes-page">
            <div className="prizes-content">
                <div className='prizes-header'></div>
                <div className='prizes-title'>Prizes</div>
                <div>Below is the prize pool for winners as well as potential prizes from the raffle.</div>
                <div>There will be top three winners, a best gamification hack, and a whopping 25 individual raffle winners!</div>
                <br></br>
                <Grid
                    container
                    flexDirection="row"
                    justifyContent="center"
                    alignContent="center"
                    spacing={10}
                    >
                    <Grid item>
                        <Card variant="outlined" sx={{width: "40vh", height: "40vh", margin:"auto"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="./imgs/mechkey.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Mechanical Keyboard
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="./imgs/lego.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    LEGO Infinity Gauntlet
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="./imgs/echo.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Echo Dot 4th Generation
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid
                    container
                    flexDirection="row"
                    justifyContent="center"
                    alignContent="center"
                    spacing={10}
                    >
                    <Grid item>
                        <Card variant="outlined" sx={{width: "40vh", height: "40vh", margin:"auto"}}>
                            <CardMedia
                                component="img"
                                height="250"
                                image="./imgs/charger.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Portable Charger
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    (Winner Prize)
                                </Typography>
                                <Typography variant="body2">
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="150"
                                image="../../nebula-purple.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Prize 5 - Super cool!
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Because you did some cool stuff
                                </Typography>
                                <Typography variant="body2">
                                    Some description of how cool this is
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="150"
                                image="../../nebula-purple.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Prize 6 - Super cool!
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Because you did some cool stuff
                                </Typography>
                                <Typography variant="body2">
                                    Some description of how cool this is
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <Grid
                    container
                    flexDirection="row"
                    justifyContent="center"
                    alignContent="center"
                    spacing={10}
                    >
                    <Grid item>
                        <Card variant="outlined" sx={{width: "40vh", height: "40vh", margin:"auto"}}>
                            <CardMedia
                                component="img"
                                height="150"
                                image="../../nebula-purple.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Prize 7 - Super cool!
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Because you did some cool stuff
                                </Typography>
                                <Typography variant="body2">
                                    Some description of how cool this is
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="150"
                                image="../../nebula-purple.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Prize 8 - Super cool!
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Because you did some cool stuff
                                </Typography>
                                <Typography variant="body2">
                                    Some description of how cool this is
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                    <Card variant="outlined" sx={{width: "40vh", height: "40vh"}}>
                            <CardMedia
                                component="img"
                                height="150"
                                image="../../nebula-purple.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Prize 9 - Super cool!
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Because you did some cool stuff
                                </Typography>
                                <Typography variant="body2">
                                    Some description of how cool this is
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}
 
export default Prizes;    