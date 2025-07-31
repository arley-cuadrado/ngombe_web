import React, { useState, useEffect } from 'react'
import Aside from  './Aside'
import AsideTopics from './AsideTopics'
import AsideVideo from './AsideVideo'
import Footer from './Footer'
import CourseCard from './CourseCard'

export default function Course(){

    const [courses, setCourses] = useState([]);

    useEffect(() => {

        fetch("../../public/courses.json")
        .then(response => response.json())
        .then(data => setCourses(data))

    }, [])

    return(
        <section className='grid grid-cols-2'>
            {/* <div className="p-4 pb-2 text-xs opacity-60 tracking-wide">The best course so far...</div>*/}
            <article>
                <ul className="list bg-base-100 rounded-box mr-30 mt-2">
                    {
                        courses.map(course =>(
                            <CourseCard course={course} key={course.id}/>
                        ))
                    }
                </ul>
            </article>
            <aside>
                <Aside />
                <AsideVideo />
                <AsideTopics />
            </aside>
            <Footer />
        </section>
    )
}