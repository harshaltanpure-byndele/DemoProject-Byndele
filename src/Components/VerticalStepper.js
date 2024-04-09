
import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";


const steps = [
  {
    label: "Create an account",
    icon: <CheckCircleOutlineOutlinedIcon />,
  },
  {
    label: "Organize clients in different lists",
    icon: <BlurCircularOutlinedIcon />,
    buttons: (
      <div className="buttons-container">
        <h5>
          Add new list and add <br />
          clients to the list
        </h5>
        <Button
          variant="contained"
          className="quick-demo-button"
        >
          Quick Demo
        </Button>
        <Button
          variant="contained"
          className="download-app-button"
        >
          <DownloadForOfflineIcon /> Download App
        </Button>
      </div>
    ),
  },
  {
    label: "Send recommendations",
  },
  {
    label: "View portfolio and trades of clients",
  },
];

export default function VerticalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
   <div className="card shadow d-flex align-items-center ">
     <div className="start  align-items-center">
      <h5>
        Getting Started
        <KeyboardArrowDownIcon />
      </h5>
      <hr />

      <Box>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                icon={step.icon}
                optional={
                  index === 2 || index === 3 ? (
                    <Typography variant="caption"></Typography>
                  ) : null
                }
              >
                <span>{step.label}</span>
                {(index === 2 && (
                  <KeyboardArrowDownIcon />
                )) ||
                  (index === 3 && (
                    <KeyboardArrowDownIcon />
                  ))}
              </StepLabel>
              {step.description && (
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              )}
              {step.buttons && step.buttons}
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
   </div>
  );
}
