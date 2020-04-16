import React from "react";
import { connect } from "react-redux";
import {
  Card,
  Typography,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";

const CandidateDetails = (props) => {
  return (
    <div>
      <div className="text-right mt-4">
        <Button variant="outlined" color="primary" onClick={props.handleUpdateBtn}>
          UPDATE Candidate
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className="mx-4"
          onClick={props.handleDialogOpen}
        >
          DELETE Candidate
        </Button>
      </div>
      <div className="container mt-4">
        <Typography variant="h4" component="h3">
          Candidate details:{" "}
        </Typography>
        <Card>
          <CardActionArea>
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name: <span className="text-primary">{props.candidate.name}</span>
              </Typography>
              <Typography variant="h5" component="p">
                Position:{" "}
                <span className="text-primary">{props.candidate.position}</span>
              </Typography>
              <Typography variant="h5" component="p">
                Father Name:{" "}
                <span className="text-primary">{props.candidate.fname}</span>
              </Typography>
              {props.candidate.email ? (
                <Typography variant="h5" component="p">
                  Email:{" "}
                  <span className="text-primary">{props.candidate.email}</span>
                </Typography>
              ) : null}
              <Typography variant="h5" component="p">
                Aadhar number:{" "}
                <span className="text-primary">{props.candidate.aadhar_num}</span>
              </Typography>
              <Typography variant="h5" component="p">
                Phone number:{" "}
                <span className="text-primary">{props.candidate.phone_num}</span>
              </Typography>
              <Typography variant="h5" component="p">
                City: <span className="text-primary">{props.candidate.city}</span>
              </Typography>
              <Typography variant="h5" component="p">
                Ward number:{" "}
                <span className="text-primary">{props.candidate.ward_num}</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    candidate: state.dashboard.candidate,
  };
};

export default connect(mapStateToProps)(CandidateDetails);
