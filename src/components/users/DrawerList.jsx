import {
  Avatar,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useContext, useState } from "react";
import { CreateContext } from "../../context/CreteContext";

const DrawerList = () => {
  const { user, logout } = useContext(CreateContext);
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerL = (
    <Box>
      <Box
        sx={{ width: "auto" }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {["uno"].map((text, index) => (
            <Box key={index}>
              <Box display={"flex"} justifyContent={"center"} m={1} mt={2}>
                {user.photoURL ? (
                  <ListItemAvatar>
                    <Avatar alt="User" src={user.photoURL} />
                  </ListItemAvatar>
                ) : (
                  <ListItemAvatar>
                    <Avatar alt="User" src="/broken-image.jpg" />
                  </ListItemAvatar>
                )}
              </Box>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={`Email: ${user.email}`} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  {user.displayName ? (
                    <ListItemText primary={`Nombre: ${user.displayName}`} />
                  ) : (
                    <ListItemText primary={`Nombre: User`} />
                  )}
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={`UID: ${user.uid}`} />
                </ListItemButton>
              </ListItem>
              <Box
                display={"flex"}
                justifyContent={"end"}
                alignContent={"end"}
                m={1}
                mt={5}
              >
                <Button variant="contained" color="primary" onClick={logout}>
                  Logout
                </Button>
              </Box>
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
  return (
    <Box component={"nav"} display={"flex"} justifyContent={"end"} gap={2}>
      <Button onClick={toggleDrawer(true)}>Perfil</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerL}
      </Drawer>
    </Box>
  );
};

export default DrawerList;
