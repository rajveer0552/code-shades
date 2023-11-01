import React, { useState } from "react";
import { Container, Grid, Button, Box, Typography, Paper, Modal ,TextField} from "@mui/material";
import styled from "styled-components";
import footerPatternImg from "../../assets/images/footer_pattern.png";


const StyledContainer = styled(Container)`
  max-width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
  /* Add more styles as necessary */
`;

const StyledPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  gap: 10px;
  border: 2px solid colorful_border_color;
  background-color: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.2);

  border-radius: 10px; /* Rounded corners for the paper */
  
  /* Apply MUI theme colors and typography */
  .MuiTypography-root {
    text-align: center;
    font-weight: 600;
    color: #333; /* Adjust text color */
  }
  
  .MuiButton-root {
    background-color: #007acc; /* Adjust button background color */
    color: #fff; /* Adjust button text color */
    transition: background-color 0.3s;
    border-radius: 5px;
    text-transform: none;
    font-weight: 600;
    
    &:hover {
      background-color: #005b96;
    }
  }
`;



const jobPositions = [
  { title: "MERN Stack Developer", experience: "1 - 5 Years" },
  { title: "Ruby on Rails Developer", experience: "1 - 5 Years" },
  { title: "Business Development Executive", experience: "0 - 3 Years" },
];

function Careers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    designation: "",
    cv: "",
  });

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleOpenFormModal = () => {
    setModalOpen(false);
    setFormModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

 
  const handleCloseFormModal = () => {
    setFormModalOpen(false);
    // Optionally reset form data here
    setFormData({
      name: "",
      qualification: "",
      designation: "",
      cv: "",
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFormSubmit = () => {
    // Handle the form submission here, e.g., send the data to a server
    console.log("Form Data:", formData);
    // Close the form modal
    handleCloseFormModal();
  };

  return (
    <>
        <div className="pageBanner">
                <img src={footerPatternImg} className="pagebanner-img" alt="" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="pageBannerHead">
                                <h2>Careers</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <Container style={{ marginTop: "20px" }}>
     
        <Typography variant="h4">We are hiring</Typography>
        <Grid container spacing={3}>
          {jobPositions.map((position, index) => (
            <Grid item xs={12} key={index}>
              <StyledPaper elevation={3}>
                < Typography variant="subtitle1">{position.title}</Typography>
                <Typography variant="body1">{position.experience}</Typography>
                <Button variant="contained" color="primary" onClick={() => handleOpenModal(position)}>
                  VIEW DETAILS
                </Button>
              </StyledPaper>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal open={modalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
     <Typography variant="h4">{selectedJob?.title}</Typography>
          <Typography variant="body1">Experience Required: {selectedJob?.experience}</Typography>
          <Typography variant="body2">
            We are looking for skilled React.js Developers to join our front-end development team responsible for...
          </Typography>
          <Button variant="contained" color="primary" onClick={handleOpenFormModal}>
            Apply
          </Button>
          <Button variant="contained" color="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Box>
      </Modal>

      <Modal open={formModalOpen} onClose={handleCloseFormModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h4">Application Form</Typography>
          <form>
            <TextField
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="qualification"
              label="Qualification"
              value={formData.qualification}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="designation"
              label="Designation"
              value={formData.designation}
              onChange={handleFormChange}
              fullWidth
              margin="normal"
            />
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              name="cv"
              onChange={handleFormChange}
            />
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleCloseFormModal}>
              Close
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Careers;
