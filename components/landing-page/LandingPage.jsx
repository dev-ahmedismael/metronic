"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Section from "../templates/Section";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { login } from "@/store/userSlice";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
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

const LandingPage = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (
        values.email === "admin@company.com" &&
        values.password === "admin123"
      ) {
        dispatch(login());
        router.push("/dashboard");
      } else {
        handleOpen();
      }
    },
  });

  return (
    <Box
      id="landing-page"
      py={5}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Container sx={{ height: "350px" }}>
        <Grid container spacing={5}>
          <Grid item sm={7} display={{ xs: "none", sm: "block" }}>
            <Box pt={5}>
              <Typography variant="h4">Some Text Here</Typography>
              <Typography variant="h2" color={"crimson"}>
                Company Name
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                velit dolores nostrum, nesciunt, voluptas earum doloremque optio
                tenetur deleniti cum quas modi neque dolore accusamus quod!
                Magnam ducimus dicta corporis.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Section>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      label="Email"
                      fullWidth
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      type="password"
                      label="Password"
                      fullWidth
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                      helperText={
                        formik.touched.password && formik.errors.password
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" fullWidth type="submit">
                      Sign In
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Section>
          </Grid>
        </Grid>
      </Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            Wrong email or password, please contact administration
          </Typography>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button onClick={handleClose}>Close</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default LandingPage;
