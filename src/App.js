import AirbnbExperience from "./components/AirbnbExperience";
import Footer from "./components/Footer";
import GiftCard from "./components/GiftCard";
import HomePage from "./components/HomePage";
import MobileNavBar from "./components/MobileNavBar";
import NavBar from "./components/NavBar";
import QAHosting from "./components/QAHosting";
import TripLocation from "./components/TripLocation";

function App() {
  return (
    <div>
      <NavBar />
      <MobileNavBar />
      <HomePage />
      <TripLocation />
      <AirbnbExperience />
      <GiftCard />
      <QAHosting />
      <Footer />
    </div>
  );
}

export default App;
