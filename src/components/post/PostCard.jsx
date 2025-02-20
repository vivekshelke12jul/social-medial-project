import { Avatar, IconButton, Card, CardHeader, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavouriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

import React from 'react'

const PostCard = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
          </Avatar>
          }
          action={
          <IconButton aria-label="settings">
              <MoreVertIcon />
          </IconButton>
        }
        title="Vivek"
        subheader="@Vivek12jul"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://cdn.pixabay.com/photo/2017/04/06/15/26/amanita-kills-fly-2208562_1280.jpg"
        alt="mushroom"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This is a rare mushroom.
        </Typography>
      </CardContent>
      <CardActions className='justify-between' disableSpacing>
        <div>
          <IconButton>
            {true? <FavouriteIcon/>: <FavouriteBorderIcon/>}
          </IconButton>

          <IconButton>
            <ShareIcon/>
          </IconButton>
          
          <IconButton>
            <ChatBubbleIcon/>
          </IconButton>
        </div>    
        <div>
          <IconButton>
            {true? <BookmarkIcon/>: <BookmarkBorderIcon/>}
          </IconButton>
        </div>
      </CardActions>
    </Card>
  )
}

export default PostCard