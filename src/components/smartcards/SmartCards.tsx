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
        image: "https://ugc.futurelearn.com/uploads/images/18/65/header_18652929-9128-4e40-8793-81a37b29b279.jpg",
        title: "Energy Dashboard",
        description: "Keep track of your energy consumption goals."
    },
    {
        image: "https://static.wixstatic.com/media/e5d7b2_0f1c8dfce9bd47f7b026c06438c3fc57~mv2.png/v1/fill/w_1128,h_770,al_c,q_90,enc_auto/e5d7b2_0f1c8dfce9bd47f7b026c06438c3fc57~mv2.png",
        title: "Sustainability Tips",
        description: "Reduce your carbon footprint."
    },
    {
        image: "https://assets.bizclikmedia.net/1800/df939f5d2a2a1c5ebe57d77599d1298f:58ce784c0141c9e48c376e59e38ae392/gettyimages-1029186020-jpg.webp",
        title: "Smart Grid",
        description: "Stay in control of all your devices."
    },
    {
        image: "https://video.cgtn.com/news/7855544e35497a4e33517a4e7a4d444d3051444f31457a6333566d54/video/75f78a15a30b408587aeb25db67434b0/75f78a15a30b408587aeb25db67434b0.jpg",
        title: "Infrastructure",
        description: "Extend your Smart Grid infrastructure."
    },
    {
        image: "https://media.istockphoto.com/id/1289956604/photo/digital-security-concept.jpg?s=612x612&w=0&k=20&c=DDHKGonX7oLV52cssLx9Ptber1JC6VIOwalvbBPmgOU=",
        title: "Security",
        description: "Finish setting up your security measures."
    },
    {
        image: "https://media.istockphoto.com/id/1216520813/photo/digital-cyberspace-with-particles-and-digital-data-network-connections-future-technology.jpg?s=612x612&w=0&k=20&c=7wvYGyA5twhPnfsN1snLk3zB-uSrTMCFI_y0uSoN6E4=",
        title: "Data Transfer",
        description: "Save time and money with our data transfer."
    }
];


export default class Home extends Component {
    render() {
        return (
            <Container>
                <Grid container spacing={6} width={"50vm"}>
                    {cards.map(card => (
                        <Grid item xs={6} md={4}>
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
