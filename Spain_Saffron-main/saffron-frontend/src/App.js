import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Medicinal from "./components/Medicinal";
import Beauty from "./components/Beauty";
import Cardiovascular from "./components/Cardiovascular";
import WeightManagement from "./components/WeightManagement";
import Acne from "./components/Acne";
import Redness from "./components/Redness";
import Exfoliation from "./components/Exfoliation";
import UnderEye from "./components/UnderEye";
import Reviews from "./components/Reviews";
import { AppBar, Toolbar, Typography, Container, Button } from "@mui/material";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Saffron's Usages
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/medicinal">Medicinal</Button>
          <Button color="inherit" component={Link} to="/beauty">Beauty & Skincare</Button>
          <Button color="inherit" component={Link} to="/reviews">Reviews</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicinal" element={<Medicinal />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/medicinal/cardio" element={<Cardiovascular />} />
          <Route path="/medicinal/weight" element={<WeightManagement />} />
          <Route path="/beauty/acne" element={<Acne />} />
          <Route path="/beauty/redness" element={<Redness />} />
          <Route path="/beauty/exfoliation" element={<Exfoliation />} />
          <Route path="/beauty/under-eye" element={<UnderEye />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
