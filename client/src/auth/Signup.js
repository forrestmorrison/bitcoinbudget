import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addNewUser } from '../features/users/authSlice'
import { Box, Button, TextField } from '@mui/material';

const Signup = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [addRequestStatus, setAddRequestStatus] = useState("idle")

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const canSave = [email, username, password].every(Boolean) && addRequestStatus === "idle"

  const onSignUp = (e) => {
    e.preventDefault()
    try {
        setAddRequestStatus('pending')
        dispatch(addNewUser({ email, username, password })).unwrap()
        setEmail('')
        setUsername('')
        setPassword('')
    } catch (err) {
        console.error('Failed to save the post', err)
    } finally {
        setAddRequestStatus('idle')
    }        
  }

  return (
    <div className="home-container">
      <Box
        sx={{
          width: {
            xs: 350,
            sm: 500,
          },
          flexGrow: 1 
        }}
      >
        <form noValidate autoComplete="off" className="form" onSubmit={onSignUp}>
          <h1>Sign Up</h1>
          <TextField
            onChange={handleEmailChange}
            value={email}
            fullWidth
            label="email"
            required
            sx={{
              margin: 1,
              display: "block"
            }}
            variant="outlined"
          />
          <TextField
            onChange={handleUsernameChange}
            value={username}
            fullWidth
            label="name"
            required
            sx={{
              margin: 1,
              display: 'block'
            }}
            variant="outlined"
          />
          <TextField
            onChange={handlePasswordChange}
            value={password}
            fullWidth
            label="password"
            type="password"
            required
            sx={{
              margin: 1,
              display: 'block'
            }}
            variant="outlined"
          />
          <Button
            type="submit"
            color="primary"
            disabled={!canSave}
            sx={{
              margin: 1,
              backgroundColor: "#F2A900",
              color: "white",
              "&:hover": {
                  backgroundColor: "white",
                  color: "#F2A900",
              },
              "&.Mui-disabled": {
                  background: "white",
                  color: "grey"
              }
            }} 
          >
            Create Account
          </Button>
        </form>
      </Box>          
    </div>
  )
}

export default Signup