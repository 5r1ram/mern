import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";

import { createPost } from '../../actions/posts.js';
import useStyles from "./styles.js";

const Form = () => {
  const dispatch = useDispatch();
  const [ postData, setPostData ] = useState({
    creator: "", title: "", caption: "", tags: "", selectedFile: "",
  });

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {

  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Create a Memory</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="caption" variant="outlined" label="Caption" fullWidth value={postData.caption} onChange={(e) => setPostData({ ...postData, caption: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
        <div className={classes.fileInput}>
          <FileBase 
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="lg" type='submit' fullWidth >Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
      </form>
    </Paper>
  )
}

export default Form