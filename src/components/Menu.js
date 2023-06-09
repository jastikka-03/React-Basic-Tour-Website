import { Box } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import HelpIcon from '@mui/icons-material/Help';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ExploreIcon from '@mui/icons-material/Explore';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import React from 'react'

const Menu = () => {
  return (
    <Box mt={2} flex={1} sx={{display:{xs:'none',sm:'block'}}}>
      <Box position='fixed'>
      <List >
          <ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <FormatAlignJustifyIcon />
              </ListItemIcon>
              <ListItemText primary="Things to do" />
            </ListItemButton>
          </ListItem><ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <ExploreIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem><ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityNewIcon />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem><ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <AddLocationAltIcon/>
              </ListItemIcon>
              <ListItemText primary="Places" />
            </ListItemButton>
          </ListItem><ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
          </ListItem><ListItem disablePadding sx={{ my: 2 }}>
            <ListItemButton>
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItemButton>
          </ListItem>
      </List>
      </Box>
    </Box>
  )
}

export default Menu
