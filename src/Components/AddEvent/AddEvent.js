import React, { useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { Button, Container, Grid, Paper, TextField, Typography } from "@material-ui/core";
import SingleLogo from "../SingleLogo/SingleLogo";
import AddEventStyle from "./AddEventStyle";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginFileValidateType, FilePondPluginFileEncode, FilePondPluginImagePreview, FilePondPluginImageResize);

function AddEvent() {
  const [files, setFiles] = useState([]);
  const classes = AddEventStyle();
  // const history = useHistory();

  // const [event, setEvent] = useState("");
  // const [date, setDate] = useState("");
  // const [description, setDescription] = useState("");
  // const getValue = (e) => {
  //   if (e.target.name === "Event Name") {
  //     setEvent(e.target.value);
  //   }
  //   if (e.target.name === "Date") {
  //     setDate(e.target.value);
  //   }
  //   if (e.target.name === "Description") {
  //     setDescription(e.target.value);
  //   }
  // };

  // const [allValue, setAllValue] = useState({});

  // setAllValue({
  //   event: event,
  //   date: date,
  //   description: description,
  // });

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   const url = "/events";
  //   if (event !== "" && date.length !== 0 && description !== "") {
  //     axios.post("https://volunteernetworkbyreact.herokuapp.com/Event", allValue);
  //     history.push(url);
  //   }
  // };
  return (
    <Container>
      <SingleLogo />
      <Grid container>
        <Grid item xs={12}>
          <Paper component="div">
            <form
            //  onSubmit={onSubmit}
            >
              <Grid container justify="center" alignItems="center" className={classes.Container}>
                <Grid item xs={12}>
                  <Link to="/dashboard/admin">
                    <Button variant="contained" color="secondary">
                      Back
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} className={classes.Heading}>
                  <Typography variant="h5" gutterBottom>
                    Add Event
                  </Typography>
                </Grid>
                <Grid item xs={5} className={classes.inputField}>
                  <TextField
                    variant="outlined"
                    //  onBlur={() => getValue}
                    required
                    label="Event Name"
                    name="Event Name"
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={5} className={classes.inputField}>
                  <TextField
                    variant="outlined"
                    //  onBlur={() => getValue}
                    required
                    name="Date"
                    type="Date"
                  ></TextField>
                </Grid>
                <Grid item xs={5} className={classes.inputField}>
                  <TextField
                    variant="outlined"
                    //  onBlur={() => getValue}
                    required
                    label="Description"
                    name="Description"
                    type="text"
                  ></TextField>
                </Grid>
                <Grid item xs={5} className={classes.inputField}>
                  <FilePond
                    files={files}
                    name="img"
                    allowReorder={true}
                    allowMultiple={false}
                    onupdatefiles={setFiles}
                    labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid item xs={12} align="center">
                    <Button type="submit" className={classes.BackBtn} variant="contained" color="secondary">
                      submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AddEvent;
