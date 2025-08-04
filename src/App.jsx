
import './App.css'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs'
import CoursesGrid from './components/CoursesGrid'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <section className='flex flex-col items-center justify-center gap-2 md:flex-row'>
        <main>{/* className='container' */}
          <CoursesGrid />
        </main>
      </section>
    </>
  )
}

export default App
