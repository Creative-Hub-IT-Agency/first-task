import bg from '../src/assets/bg.jpg'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='min-h-screen container mx-auto px-4 md:px-8 lg:px-12 xl:px-16'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'darken',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backgroundAttachment: 'fixed'      
      }}  
    >
<Navbar/>
    </div>
  )
}
export default App

