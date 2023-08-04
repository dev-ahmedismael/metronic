"use client";
import React, { useState } from "react";
import Section from "../templates/Section";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "@/custom-hooks/useAuth";

const englishNameRegex = /^[A-Za-z]+$/;
const arabicNameRegex = /^[\u0621-\u064A0-9 ]+$/;
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  english_name: yup
    .string()
    .matches(englishNameRegex, "Only English letters")
    .required("Required"),
  arabic_name: yup
    .string()
    .matches(arabicNameRegex, "Only Arabic letters")
    .required("Required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  national_id: yup
    .string()
    .matches(/^[0-9]+$/, "National ID must be only digits")
    .length(14, "National ID consists of 14 digits")
    .required("National ID is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};

const CreateNewUser = () => {
  useAuth();

  const formik = useFormik({
    initialValues: {
      english_name: "",
      arabic_name: "",
      phone: "",
      email: "",
      national_id: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleOpen();
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedRoles, setSelectedRoles] = useState([]);
  return (
    <Box py={5}>
      <Container>
        <Section>
          <Typography variant="h5" mb={5}>
            Create New User
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="English Name"
                  fullWidth
                  name="english_name"
                  value={formik.values.english_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.english_name &&
                    Boolean(formik.errors.english_name)
                  }
                  helperText={
                    formik.touched.english_name && formik.errors.english_name
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="Arabic Name"
                  fullWidth
                  name="arabic_name"
                  value={formik.values.arabic_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.arabic_name &&
                    Boolean(formik.errors.arabic_name)
                  }
                  helperText={
                    formik.touched.arabic_name && formik.errors.arabic_name
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="Phone"
                  fullWidth
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="Email"
                  fullWidth
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="Nationality"
                  fullWidth
                  name="nationality"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <TextField
                    variant="outlined"
                    label="Marital Status"
                    fullWidth
                    name="marital_status"
                    select
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                    <MenuItem value="Widowed">Widowed</MenuItem>
                    <MenuItem value="Divorced">Divorced</MenuItem>
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="Gender"
                  fullWidth
                  select
                  name="gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="National ID"
                  fullWidth
                  name="national_id"
                  value={formik.values.national_id}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.national_id &&
                    Boolean(formik.errors.national_id)
                  }
                  helperText={
                    formik.touched.national_id && formik.errors.national_id
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <OutlinedInput fullWidth type="date" name="date_of_birth" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <OutlinedInput fullWidth type="file" name="image" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  label="Address"
                  fullWidth
                  name="address"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Roles</InputLabel>
                  <Select
                    variant="outlined"
                    fullWidth
                    multiple
                    onChange={(e) => setSelectedRoles(e.target.value)}
                    value={selectedRoles}
                    input={<OutlinedInput label="Roles" />}
                    name="roles"
                  >
                    <MenuItem value="Doctor">Doctor</MenuItem>
                    <MenuItem value="Receptionist">Receptionist</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Rad Doctor">Rad Doctor</MenuItem>
                    <MenuItem value="Rad Technican">Rad Technican</MenuItem>
                    <MenuItem value="Rad Cashier">Rad Cashier</MenuItem>
                    <MenuItem value="Lab Doctor">Lab Doctor</MenuItem>
                    <MenuItem value="Lab Technican">Lab Technican</MenuItem>
                    <MenuItem value="Lab Receptionist">
                      Lab Receptionist
                    </MenuItem>
                    <MenuItem value="Lab Cashier">Lab Cashier</MenuItem>
                    <MenuItem value="Clinic Service Receptionist">
                      Clinic Service Receptionist
                    </MenuItem>
                    <MenuItem value="Clinic Service Cashier">
                      Clinic Service Cashier
                    </MenuItem>
                    <MenuItem value="Nurse">Nurse</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Box py={5}>
              <Divider />
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Button variant="contained" type="submit">
                Save
              </Button>
            </Box>
          </form>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-description">
                User has been created successfully.
              </Typography>
              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button onClick={handleClose}>Close</Button>
              </Box>
            </Box>
          </Modal>
        </Section>
      </Container>
    </Box>
  );
};

export default CreateNewUser;
