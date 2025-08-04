import Aside from  './Aside'
import AsideTopics from './AsideTopics'
import AsideVideo from './AsideVideo'
import Footer from './Footer'
import CourseCard from './CourseCard'

export default function CoursesGrid({courses}){
    return(
        <main className='flex flex-col justify-center gap-2 md:flex-row'>
            <section className='flex flex-col'> 
            {/* <div className="p-4 pb-2 text-xs opacity-60 tracking-wide">The best course so far...</div>*/}
            <article className='order-first md:order-first md:h-screen'>
                <ul className="list mr-0 md:mr-15 lg:mr-30 mt-2">
                    {
                        courses.map(course =>(
                            <CourseCard course={course} key={course.id}/>
                        ))
                    }
                </ul>
            </article>
            <section className='hidden md:block'><Footer /></section>
            </section>
            <aside className='flex flex-col items-center p-2'>
                <section className='flex sm:flex-row md:flex-col lg:flex-col'>
                    <Aside />
                    <AsideVideo />
                </section>
                <AsideTopics />
            </aside>
            <section className='block md:hidden'><Footer /></section>
        </main>
    )
}