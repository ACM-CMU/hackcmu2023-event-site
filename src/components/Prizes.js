import '../styles/Prizes.css'
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material'

const Prizes = () => { 
    return (  
        <div className="prizes-page">
            <div className="prizes-content">
                <div className='prizes-header'></div>
                <div className='prizes-title'>Prizes</div>
                <div>Probably some nice free stuff - we should put some pictures up</div>
                <div>I think we want to set up some kind of "card" component to list out prizes</div>
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
                                    Prize 1 - Super cool!
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
                                    Prize 2 - Super cool!
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
                                    Prize 3 - Super cool!
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
                                    Prize 4 - Super cool!
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