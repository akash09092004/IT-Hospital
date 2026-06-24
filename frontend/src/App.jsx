import './App.css'
import Header from './component/Header'
import MainRoute from './MainRoute'
import Footer from './component/Footer'
import ScrollToTop from './component/SrollToTop'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <main className="grow">
        <MainRoute />
      </main>
      <Footer />
    </div>
  )
}

export default App
