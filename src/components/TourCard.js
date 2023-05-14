import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Rating, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

import React from 'react'

const TourCard = () => {
  return (
    <Card sx={{ maxWidth: 600, marginBottom:'20px' }}>
    <CardHeader
     
      title="A Perfect Holidy Spot"
    />
    <CardMedia
      component="img"
      height="194"
      image={require('../assets/1.webp')}
      alt="Paella dish"
    />
    <CardContent>
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the mussels,
        if you like.
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon/>
      </IconButton>
      <Rating
        name="simple-controlled"
        value={3}
       
      />

    </CardActions>

  </Card>

  )
}

export default TourCard
