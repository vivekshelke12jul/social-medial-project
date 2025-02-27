import React from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import { useFormik } from "formik";
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import VideoCamIcon from '@mui/icons-material/VideoCam';
import ArticleIcon from '@mui/icons-material/Article';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {IconButton} from "@mui/material";
import { uploadToCloudinary } from "../../utils/cloudinary";
import { useDispatch } from "react-redux";
import { createPostAction } from "../../redux/post/post.action";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",

};

const CreatePostModal = ({ open, handleClose }) => {

  const [selectedImage, setSelectedImage] = React.useState();
  const [selectedVideo, setSelectedVideo] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useDispatch();

  const handleSelectImage = async (event) => {
    setIsLoading(true);
    setSelectedVideo("");
    const imageUrl = await uploadToCloudinary(event.target.files[0], "image")
    setSelectedImage(imageUrl);
    setIsLoading(false);
    formik.setFieldValue("image", imageUrl);
  };

  const handleSelectVideo = async (event) => {  
    setIsLoading(true);
    setSelectedImage("");
    const videoUrl = await uploadToCloudinary(event.target.files[0], "video");
    setSelectedVideo(videoUrl);
    formik.setFieldValue("video", videoUrl);
    setIsLoading(false);
    formik.setFieldValue("video", videoUrl);
  };
  
  const formik = useFormik({
    initialValues: {
      caption: "",
      image: "",
      video: "",
    },
    onSubmit: (values) => {
      console.log("values ", values);
      dispatch(createPostAction(values));
    },
  });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
       <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="flex items-center space-x-4 ">
            <Avatar/>
            <div>
              <p className="font-bold text-lg">Vivek</p>
              <p className="text-sm">@vivek12jul</p>
            </div>
          </div>
          <textarea 
            className="outline-none w-full mt-5 p-2 bg-transparent border-[#3b4054] border rounded-sm"
            placeholder="What's on your mind" 
            name="caption" 
            rows={4}
            value={formik.values.caption}
            onChange={formik.handleChange}
            id=""
          >
          </textarea>

          <div className="flex items-center mt-5 space-x-5">
            <div>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleSelectImage}
                style={{display: 'none'}}
                id="image-input"
              />
              <label htmlFor="image-input">
                <IconButton color="primary" component="span">
                  <ImageIcon/>
                </IconButton>
              </label>
              <span>Image</span>
            </div>

            <div>
              <input 
                type="file" 
                accept="video/*" 
                onChange={handleSelectVideo}
                style={{display: 'none'}}
                id="video-input"
              />
              <label htmlFor="video-input">
                <IconButton color="primary" component="span">
                  <VideoCamIcon/>
                </IconButton>
              </label>
              <span>Video</span>
            </div>

          </div>
          {selectedImage && <div>
            <img 
              src={selectedImage}
              alt=""
            />
          </div> }
          {selectedVideo && <div>
            <video
              controls 
              src={selectedVideo}
              alt=""
            />
          </div> }
          
          <div className="flex w-full justify-end">
            <Button s
              x={{borderRadius: "1.5rem"}}
            variant="contained"
            type="submit"
            >Post</Button>
          </div>
        </div>
       </form>
       <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={isLoading}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
