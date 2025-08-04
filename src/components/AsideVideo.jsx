import platformvideo from '../assets/platform-video.svg'
import Modal from './Modal'

export default function AsideVideo(){
    return(
        <div className="card bg-base-100 image-full mb-3 shadow-sm ms:w-auto md:w-75">
            <figure>
                <img
                src={platformvideo}
                alt="Platform video" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mb-3 text-xs md:text-base lg:text-base">Introduction video</h2>
                <div className="card-actions justify-center">
                     <Modal />
                </div>
            </div>
        </div>
    )
}