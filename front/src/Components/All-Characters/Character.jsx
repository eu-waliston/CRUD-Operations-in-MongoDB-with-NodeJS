import React from "react";
import "./AllCharacters.scss";
import "./Character.scss";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "50px",
};

const Character = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="character">
      <div>
        <img
          key={props.index}
          src={props.Image}
          alt="GANTZ characters"
          className="characters_photo_style"
          onClick={handleOpen}
        />
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h2 className="names">{props.Name}</h2>
          </Typography>
          <img
            key={props.index}
            src={props.Image}
            alt="GANTZ characters"
            className="characters_photo_style_box"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h4>Nationallity: {props.Nationallity}</h4>
            <h4>Age: {props.Age}</h4>
            <h4>
              Habilities: {props.Habilities[0]} &nbsp; {props.Habilities[1]}{" "}
              &nbsp; {props.Habilities[2]}
            </h4>
            <h4 className="personality">
              Personality: {props.Personality[0]} &nbsp; {props.Personality[1]}{" "}
              &nbsp; {props.Personality[2]} &nbsp; {props.Personality[3]}
            </h4>
            <h4>Status: {props.Status}</h4>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Character;
