import { Box, Modal } from "@mui/material";
import UpdateTask from "../updateTask/UpdateTask";
import PropTypes from 'prop-types'

const ModalUpdate = ({ open, handleClose, task }) => {

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: '50%',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backgroundColor: "rgba(12, 22, 0, 0.5)" }}
      >
        <Box style={style}>
          <UpdateTask task={task}/>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUpdate;

ModalUpdate.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}
