import { useEffect } from 'react';
import Footer from './layouts/footer'
import Header from './layouts/header'
import ApplyVisaPage from './pages/applyVisaPage';

function App() {
  useEffect(() => {
    console.log("APP RENDERED");
    return () => {
      console.log("APP DESTROYED");
    }
  });

  return (
    <div className="font-basier relative flex min-h-screen flex-col bg-[#131313] text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 15% 50%, rgb(30, 21, 63), rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, rgb(7, 48, 59), rgba(255, 255, 255, 0) 25%)',
        }}
      ></div>
      <Header />
      {/* Use Router here to show different pages */}
      <ApplyVisaPage />

      <Footer />
    </div>
  )
}

export default App
