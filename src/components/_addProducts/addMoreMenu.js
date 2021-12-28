import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import AddIcon from '@mui/icons-material/Add';

// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';

// ----------------------------------------------------------------------

export default function UserMoreMenu() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton>
        <Icon icon={} width={20} height={20} />
        <ListItemText> Add More </ListItemText>
      </IconButton>

      {/* <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'black' }}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" 
          />
        </MenuItem>

        <MenuItem component={RouterLink} to="#" sx={{ color: 'black' }}>
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
            <ListItemText primary="Edit" 
          />
          </ListItemIcon>
       
        </MenuItem>
      </Menu> */}
    </>
  );
}
