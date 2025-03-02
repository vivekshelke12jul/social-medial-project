import { Avatar, IconButton, Card, CardHeader, CardMedia, CardContent, Typography, CardActions, Divider } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavouriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import { createCommentAction, likePostAction } from '../../redux/post/post.action'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IsLikedByReqUser } from '../../utils/IsLikedByReqUser'

const PostCard = ({item}) => {
  const dispatch = useDispatch()
  const {post, auth} = useSelector(state => state)
  const [showComments, setShowComments] = React.useState(false)
  const handleShowComments = () => setShowComments(!showComments)

  const handleCreateComment = (content) => {
    const req = {
      postId: item.id,
      data: {
        text: content
      }
    }
    dispatch(createCommentAction(req))
  }

  const handleLikePost = () => {
    dispatch(likePostAction(item.id))
  }

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="vegetation">
              V
          </Avatar>
          }
          action={
          <IconButton aria-label="settings">
              <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName}
        subheader={`@${item.user.firstName}`}
      />
      <CardMedia
        component={item.image? "img" : "video"}
        height="194"
        src={item.image || item.video}
        controls
        alt="media"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.caption}
        </Typography>
      </CardContent>
      
      <CardActions className='justify-between' disableSpacing>
        <div>
          <IconButton onClick={() => handleLikePost()}>
            {IsLikedByReqUser(item, auth.user.id)? <FavouriteIcon/>: <FavouriteBorderIcon/>}
          </IconButton>

          <IconButton>
            <ShareIcon/>
          </IconButton>
          
          <IconButton onClick={handleShowComments}>
            <ChatBubbleIcon/>
          </IconButton>
        </div>    
        <div>
          <IconButton>
            {true? <BookmarkIcon/>: <BookmarkBorderIcon/>}
          </IconButton>
        </div>
      </CardActions>

      { showComments && <section>
        <div className='flex  items-center space-x-5 mx-3 my-5'>
          <Avatar sx={{}}/>
          <input 
            onKeyPress={(e)=>{
              if(e.key === 'Enter'){
                handleCreateComment(e.target.value)
                console.log('pressed enter--------', e.target.value)
              }
            }}
            className='w-full outline-none bg-transparent border border-[3b4054] rounded-full px-5 py-2'
            type="text" 
            placeholder='Add a comment'  
          />
        </div>
        <Divider/>
        <div className="mx-3 space-y-2 my-5 text-xs">
            { item.comments.map((comment) => 
              <div className='flex items-center space-x-5'>
                <Avatar sx={{width: '2rem', height: '2rem', fontSize: '.8rem'}}>
                  {comment.user.firstName.charAt(0).toUpperCase()}
                </Avatar>
                <p>{comment.text}</p>
              
              </div>
            )}
        </div>
      </section>}
    </Card>
  )
}

export default PostCard