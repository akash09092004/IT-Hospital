
import './App.css'
import Header from './component/Header'
import MainRoute from './MainRoute'
import Footer from './component/Footer'
import ScrollToTop from './component/SrollToTop'
import IsOnline from './IsOnline.jsx'


function App() {
  const isOnline = IsOnline();
   if(!isOnline){
    alert('yor are offline !')
   } 
   else{
    alert('yor are online !')
   }  
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





