import { Routes, Route, useNavigate } from "react-router-dom"
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@emotion/react';
import { Provider } from "react-redux";
import { store } from "./app/store";
import Home from "./pages/Home"
import Nav from "./components/Nav";
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header>
            <Nav />
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
