import elements from '../elements.json';

export default function Details ({name, id}:any) {

    function closeModal () {
        let currentMetal:any = document.querySelector(`#metal-${id}`);
        currentMetal.style.display='none';
    }
    let currendId = id-1;
    return (
        <div className={`details`} id={`metal-${id}`}>
            <div className="metal-details">
                <div className="metal-header">
                    <h2>{name} Details:</h2>
                    <a href="javascript:void(0)" onClick={closeModal}>
                        <img src="close.svg" alt="close"/>
                    </a>
                </div>
                <div className="metal-body">
                    <div className="left-side">
                        <p>{elements[currendId].summary}</p>
                    </div>
                    <div className="right-side">
                        <img src={elements[currendId].image.url} alt='metal-appearance' />
                        <p>{elements[currendId].image.title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}