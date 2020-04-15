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

const VoterDetails = (props) => {
  return (
    <div>
      <div className="text-right mt-4">
        <Button variant="outlined" color="primary" onClick={props.handleUpdateBtn}>
          UPDATE Voter
        </Button>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className="mx-4"
          onClick={props.handleDialogOpen}
        >
          DELETE Voter
        </Button>
      </div>
      <div className="container mt-4">
        <Typography variant="h4" component="h3">
          Voter details:{" "}
        </Typography>
        <Card>
          <CardActionArea>
            <CardMedia
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Name: <span className="text-primary">{props.voter.name}</span>
              </Typography>
              <Typography variant="h5" component="p">
                Father Name:{" "}
                <span className="text-primary">{props.voter.fname}</span>
              </Typography>
              {props.voter.email ? (
                <Typography variant="h5" component="p">
                  Email:{" "}
                  <span className="text-primary">{props.voter.email}</span>
                </Typography>
              ) : null}
              <Typography variant="h5" component="p">
                Aadhar number:{" "}
                <span className="text-primary">{props.voter.aadhar_num}</span>
              </Typography>
              <Typography variant="h5" component="p">
                Phone number:{" "}
                <span className="text-primary">{props.voter.phone_num}</span>
              </Typography>
              <Typography variant="h5" component="p">
                City: <span className="text-primary">{props.voter.city}</span>
              </Typography>
              <Typography variant="h5" component="p">
                Ward number:{" "}
                <span className="text-primary">{props.voter.ward_num}</span>
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
    voter: state.dashboard.voter,
  };
};

export default connect(mapStateToProps)(VoterDetails);
