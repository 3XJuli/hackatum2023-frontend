import { Container, Grid } from '@mui/material'
import { Component } from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cards = [
    {
        image: "https://assets.bizclikmedia.net/1800/df939f5d2a2a1c5ebe57d77599d1298f:58ce784c0141c9e48c376e59e38ae392/gettyimages-1029186020-jpg.webp",
        title: "Smart Grid",
        description: "Keep all your stuff in control."
    },
    {
        image: "https://video.cgtn.com/news/7855544e35497a4e33517a4e7a4d444d3051444f31457a6333566d54/video/75f78a15a30b408587aeb25db67434b0/75f78a15a30b408587aeb25db67434b0.jpg",
        title: "Infrastructure",
        description: "Enhance your infrastructure."
    },
    {
        image: "https://media.istockphoto.com/id/1289956604/photo/digital-security-concept.jpg?s=612x612&w=0&k=20&c=DDHKGonX7oLV52cssLx9Ptber1JC6VIOwalvbBPmgOU=",
        title: "Security",
        description: "Finish setting up your security measures."
    },
    {
        image: "https://media.istockphoto.com/id/1216520813/photo/digital-cyberspace-with-particles-and-digital-data-network-connections-future-technology.jpg?s=612x612&w=0&k=20&c=7wvYGyA5twhPnfsN1snLk3zB-uSrTMCFI_y0uSoN6E4=",
        title: "Data Transfer",
        description: "Save time and money."
    }
];


export default class Home extends Component {
    render() {
        return (
            <Container style={{ paddingTop: 96 }}>
                <Grid container spacing={5}>
                    {cards.map(card => (
                        <Grid item xs={6}>
                            <Card>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={card.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Open</Button>
                                </CardActions>
                            </Card>
                        </Grid >
                    ))}
                </Grid >
            </ Container >
        )
    }
}
