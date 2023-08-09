import * as api from "../network/api";

import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";

const AddStudent = ({ setStudents }) => {
  const [name, setName] = useState();
  const [courseOne, setCourseOne] = useState();
  const [courseTwo, setCourseTwo] = useState();
  const [courseThree, setCourseThree] = useState();
  const [courseFour, setCourseFour] = useState();
  const [courseFive, setCourseFive] = useState();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

//Some validation need to be done for check entered value is a number and check values are within the range

    const gpa =
      (checkCredit(courseOne) * 3.0 +
        checkCredit(courseTwo) * 3.0 +
        checkCredit(courseThree) * 3.0 +
        checkCredit(courseFour) * 3.0 +
        checkCredit(courseFive) * 3.0) /
      (3 * 5.0);

    const docRef = await api.addStudent(name, gpa);

    const id = docRef.id;
    const studentName = name
    
    setStudents({ id, studentName, gpa });
  };

  const checkCredit = (marks) => {
    let credits;
    if (marks >= 0 && marks <= 40) {
      credits = 0;
    } else if (marks >= 41 && marks <= 60) {
      credits = 1;
    } else if (marks >= 61 && marks <= 80) {
      credits = 2;
    } else if (marks >= 81 && marks <= 100) {
      credits = 3;
    }
    return credits;
  };
  return (
    <div>
      <Typography gutterBottom variant="h3" align="center">
        Add Student
      </Typography>
      <Card style={{ maxWidth: 500, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Student details
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Student name"
                  placeholder="Enter name"
                  variant="outlined"
                  fullWidth
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First course marks"
                  placeholder="Enter first course marks"
                  variant="outlined"
                  fullWidth
                  required
                  value={courseOne}
                  onChange={(e) => setCourseOne(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Second course marks"
                  placeholder="Enter second course marks"
                  variant="outlined"
                  fullWidth
                  required
                  value={courseTwo}
                  onChange={(e) => setCourseTwo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Third course marks"
                  placeholder="Enter third course marks"
                  variant="outlined"
                  fullWidth
                  required
                  value={courseThree}
                  onChange={(e) => setCourseThree(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Fourth course marks"
                  placeholder="Enter fourth course marks"
                  variant="outlined"
                  fullWidth
                  required
                  value={courseFour}
                  onChange={(e) => setCourseFour(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Fifth course marks"
                  placeholder="Enter fidth course marks"
                  variant="outlined"
                  fullWidth
                  required
                  value={courseFive}
                  onChange={(e) => setCourseFive(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddStudent;
