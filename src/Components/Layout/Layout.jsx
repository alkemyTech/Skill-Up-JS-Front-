import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Navbar } from '../Navbar'

const Layout = ({ children }) => {
  return (
    <div className='flex h-full'>



      <Navbar />

      <div className='flex flex-col w-full'>
        <Header />
        {children}
        <Footer />

      </div>

    </div>
  )
}

export default Layout
