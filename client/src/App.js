import { FaBitcoin } from "react-icons/fa"
import { Routes, Route } from "react-router-dom"
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import Calculator from "./components/Calculator";
import Home from "./pages/Home"
import Login from "./auth/Login";
import Signup from "./auth/Signup";

const theme = createTheme({
  palette: {
      primary: {
          main: '#F2A900'
      }
  },
  typography: {
    fontFamily: [
      "Ubuntu",
    ],
    button: {
      textTransform: 'none',
      fontWeight: "bold"
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header>
          <FaBitcoin size="48px" style={{ margin: "10px", marginTop: "12px", color: "#F2A900"}}/>
          <h1>Bitcoin Budget</h1>
        </header>
        <main>
          <p>Welcome to the Bitcoin Budget app</p>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          <Calculator />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
