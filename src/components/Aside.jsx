export default function Aside(){
    return(
        <>
            <div className="card bg-base-100 mb-3 shadow-sm ms:w-auto md:w-75 mr-2">
                <div className="card-body">
                    <h2 className="card-title mb-3 text-xs md:text-base lg:text-base">
                        Global progress
                        <div className="badge badge-secondary text-xs md:text-base lg:text-base h-auto line-clamp-1">35%</div>
                    </h2>
                    <p className="list-col-wrap text-xs opacity-100 mb-1 max-w-100 line-clamp-2">Lesson status Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...</p>
                    <div className="card-actions justify-start">
                        <div className="opacity-60">last seen - <span>July 27</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}