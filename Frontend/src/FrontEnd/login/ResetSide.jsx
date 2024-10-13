import React, { useState } from 'react';
import { Button, TextField, Grid, Box, Typography, Paper, Card, CardContent, CardActions } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

export default function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5173/api/auth/forgot-password", { username, password });
      alert(response.data);
      navigate("/signin");
    } catch (error) {
      console.error("Password reset error:", error);
      alert("Failed to reset password. Please try again.");
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={6} square sx={{ padding: 3, width: 400 }}>
        <Card>
          <CardContent>
            <Typography component="h1" variant="h5" textAlign="center" marginBottom={2}>
              Forgot Password
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <CardActions>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Reset Password
                </Button>
              </CardActions>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </Grid>
  );
}