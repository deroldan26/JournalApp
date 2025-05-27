import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Typography, TextField, Link } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
          <Grid container>
            <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="Full Name"
                type="text"
                placeholder="John Doe"
                fullWidth 
              />
            </Grid>
            <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField 
                label="email" 
                type="email"
                placeholder="email@example.com"
                fullWidth
              />
            </Grid>
            <Grid item size={{ xs: 12 }} sx={{ mt: 2 }}>
              <TextField
                label="password"
                type="password"
                placeholder="password123"
                fullWidth 
              />
            </Grid>

            <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
              <Grid item size={{ xs: 12 }}>
                <Button variant="contained" fullWidth>
                  Create Account
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{mr: 1}}>Already have an account?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">Login</Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}

