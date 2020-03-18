import React from 'react';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import MyRoute from "./components/MyRoute"
class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <MyRoute />
        <Footer />
      </main>

    );
  }
}
export default App;