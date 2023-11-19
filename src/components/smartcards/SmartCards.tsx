import { Container, Grid } from '@mui/material'
import { Component } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import pages from '../../pages';
import { Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Grid container spacing={6} width={"50vm"}>
                    {pages.map(page => (
                        page.cardTitle !== null && page.cardImage !== null &&
                        <Grid item xs={6} md={4}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={page.cardImage}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {page.cardTitle}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {page.cardDescription}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Link to={page.route} style={
                                        {
                                            textDecoration: 'none',
                                            color: '#8accdd'
                                        }
                                    }>
                                        <Typography>Open</Typography>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid >
                    ))}
                </Grid >
            </ Container >
        )
    }
}
