import React, { useRef, useState } from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import emailjs from "@emailjs/browser";
import svg from "../assets/contact.svg";

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !form.current["name"].value.trim() ||
      !form.current["reply_to"].value.trim() ||
      !form.current["subject"].value.trim() ||
      !form.current["message"].value.trim()
    ) {
      setStatus("error");
    } else {
      setOpen(true);

      emailjs
        .sendForm(
          "service_kpxo4vs",
          "template_0yhjq6j",
          form.current,
          "V7enx7yWsRHAnlnRG"
        )
        .then(
          (result) => {
            setStatus("success");
            form.current.reset();
            setOpen(false);

            setTimeout(() => setStatus(""), 5000);
          },
          (error) => {
            setStatus("error");
            setOpen(false);

            setTimeout(() => setStatus(""), 5000);
          }
        );
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        px: { xs: 2, sm: 3, md: 5, lg: 7 },
        py: { xs: 7, md: 10 },
      }}
    >
      {/* Section Divider */}
      <Divider sx={{ mb: { xs: 6, md: 8 } }} />

      {/* Section Heading */}
      <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
        <Typography
          component="span"
          sx={{
            display: "inline-block",
            px: 2,
            py: 0.8,
            mb: 2,
            borderRadius: 50,
            backgroundColor: "action.hover",
            color: "primary.main",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
          }}
        >
          GET IN TOUCH
        </Typography>

        <Typography
          variant="h2"
          sx={{
            typography: {
              xs: "h4",
              sm: "h3",
              md: "h2",
            },
            fontWeight: 800,
            mb: 2,
          }}
        >
          Let's Connect
        </Typography>

        <Typography
          sx={{
            maxWidth: 650,
            mx: "auto",
            color: "text.secondary",
            lineHeight: 1.8,
          }}
        >
          Have a project in mind, a question, or an opportunity to
          collaborate? Feel free to send me a message and I'll get back to
          you as soon as possible.
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 3, md: 5 }}
        alignItems="stretch"
      >
        {/* Contact Form */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Card
            elevation={0}
            sx={{
              height: "100%",
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background:
                  "linear-gradient(90deg, #a729ff, #3b82f6)",
              },
            }}
          >
            <CardContent
              sx={{
                p: { xs: 2.5, sm: 4, md: 5 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                Send Me a Message
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  mb: 3,
                }}
              >
                Fill out the form below and I'll be happy to hear from you.
              </Typography>

              <Box
                component="form"
                ref={form}
                onSubmit={sendEmail}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {status === "success" && (
                  <Alert severity="success">
                    Message sent successfully!
                  </Alert>
                )}

                {status === "error" && (
                  <Alert severity="error">
                    Something went wrong. Please try again.
                  </Alert>
                )}

                <TextField
                  variant="outlined"
                  name="name"
                  label="Name"
                  placeholder="Enter your name"
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  name="reply_to"
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  name="subject"
                  label="Subject"
                  placeholder="What is this about?"
                  fullWidth
                />

                <TextField
                  variant="outlined"
                  name="message"
                  label="Message"
                  placeholder="Write your message..."
                  multiline
                  minRows={5}
                  fullWidth
                />

                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    mt: 1,
                    py: 1.4,
                    borderRadius: 2,
                    background:
                      "linear-gradient(90deg, #a729ff, #3b82f6)",
                    color: "#fff",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    boxShadow: "none",

                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #8e1fe0, #2563eb)",
                      boxShadow: "0 8px 20px rgba(59, 130, 246, 0.2)",
                    },
                  }}
                >
                  Send Message
                </Button>

                <Backdrop
                  sx={(theme) => ({
                    color: "#fff",
                    zIndex: theme.zIndex.drawer + 1,
                  })}
                  open={open}
                >
                  <CircularProgress color="inherit" />
                </Backdrop>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Illustration */}
        <Grid
          size={{ xs: 12, md: 5 }}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Card
            elevation={0}
            sx={{
              height: "100%",
              minHeight: 500,
              position: "relative",
              overflow: "hidden",
              borderRadius: 4,
              border: "1px solid",
              borderColor: "divider",
              backgroundColor: "background.paper",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background:
                  "linear-gradient(90deg, #3b82f6, #a729ff)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={svg}
              alt="Contact illustration"
              sx={{
                width: "85%",
                maxWidth: 500,
                height: "auto",
                objectFit: "contain",
                p: { md: 3, lg: 4 },
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;