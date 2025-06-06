import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"

export const NavBar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar 
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)`, xs: '100%' },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container sx={{ width: '100%' }} direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" noWrap component="div">Journal App</Typography>
                <IconButton color="error">
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
