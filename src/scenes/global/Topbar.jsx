import React, { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display={"flex"} justifyContent={"space-between"} p={2}>
      {/* seach bar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* Icons section */}
      <Box display={"flex"}>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'dark' ? (
           <NightlightIcon />
        ):(
          <LightModeIcon />
        )}
         
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <PersonIcon />
        </IconButton>

      </Box>
    </Box>
  );
};

export default Topbar;
