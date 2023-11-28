// // src/components/NavBar/NavBar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {
//   return (
//     <nav>
//       <Link to="/add-task">Add Task</Link>
//       <Link to="/delete-task">Delete Task</Link>
//       <Link to="/update-task">Update Task</Link>
//       <Link to="/show-task">Show Task</Link>
//       <Link to="/important-task">Important Task</Link>
//     </nav>
//   );
// }

// export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ToDo App
        </Typography>
        <Button color="inherit" component={Link} to="/add-task">Add Task</Button>
        <Button color="inherit" component={Link} to="/show-task">Show Task</Button>
        <Button color="inherit" component={Link} to="/important-task">Important Task</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
