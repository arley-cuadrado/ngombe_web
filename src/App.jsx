
import './App.css'
import Navbar from './components/Navbar'
import Breadcrumbs from './components/Breadcrumbs'
import Course from './components/Course'
import './index.css'

function App() {

  return (
    <>
      <Navbar />
      <section className='justify-content'>
        <main className='container'>
          <Course />
        </main>
      </section>
    </>
  )
}

export default App
