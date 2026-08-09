import Header from './components/Header';
import Footer from './components/Footer.jsx'
import Jobs from './pages/Jobs.jsx'
import { Route, Routes } from 'react-router-dom'
import JobDetails from './pages/JobDetails.jsx'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Jobs />} />
        <Route path='/job/:id' element={<JobDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
