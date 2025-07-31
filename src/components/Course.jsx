import React, { useState, useEffect } from 'react'
import Aside from  './Aside'
import AsideTopics from './Aside-topics'
import AsideVideo from './Aside-video'
import Footer from './Footer'

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
                {
                    courses.map(course =>(
                        <ul className="list bg-base-100 rounded-box mr-30 mt-2">
                            <a href='#' key={course.id}>
                            <li className="list-row">
                                <div><img className="size-25 rounded-box" src={`images/${course.image}`}/></div>
                                    <div>
                                        <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
                                        <p className="list-col-wrap text-xs opacity-60 mb-1 max-w-100 line-clamp-2">
                                            {course.desription}
                                        </p>
                                        <button className="btn btn-square btn-ghost">
                                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                                        </button>
                                        <button className="btn btn-square btn-ghost">
                                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></g></svg>
                                        </button>
                                    </div>
                            </li>
                            </a>
                            <div></div>
                        </ul>
                    ))
                }
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