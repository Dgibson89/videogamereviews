import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Games from "./components/Games";
import AddReview from "./components/AddReview";
import Reviews from "./components/Reviews";

function App() {
  const appStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr auto", // Header, content, footer
    minHeight: "100vh", // Full viewport height
  };

  return (
    <div style={appStyle}>
      <Header />
      <main>
        <Games />
        <AddReview />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
