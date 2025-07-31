import platformvideo from '../assets/platform-video.svg'
import Modal from './Modal'

export default function AsideVideo(){
    return(
        <div className="card bg-base-100 image-full w-75 mb-3 shadow-sm">
            <figure>
                <img
                src={platformvideo}
                alt="Platform video" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mb-3">Introduction video</h2>
                <div className="card-actions justify-center">
                     <Modal />
                </div>
            </div>
        </div>
    )
}