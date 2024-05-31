import { Tooltip } from 'react-tooltip';
import Details from './details';

export default function Metal ({atomNum, name, symbol, background, row, column, standardState, bondingType, boilingPoint, description, atomicMass}:any) {
    let backgroundColor = '#'+background;
    let rowFrom = 'row-'+row;
    let rowTo = 'row-'+(row+1);
    let colFrom = 'col-'+column;
    let colTo = 'col-'+(column+1);
    let atmMass = atomicMass.toFixed(2);
    function showDetails (id:any) {
        let currentMetal:any = document.querySelector(`#metal-${id}`);
        currentMetal.style.display = 'block';
    }
    return (
        <>
            <Details id={atomNum} name={name}/>
            <div className="metal" style={{
                background: backgroundColor,
                gridRowStart: rowFrom,
                gridRowEnd: rowTo,
                gridColumnStart: colFrom,
                gridColumnEnd: colTo,
                
            }}>
                <a
                    onClick={()=>showDetails(atomNum)}
                    data-tooltip-id="my-tooltip"
                    data-tooltip-place="top"
                    data-tooltip-delay-show={500}
                    data-tooltip-html={
                        `Name : <b>${name}</b><br/> 
                        Symbol : <b>${symbol}</b><br/>
                        Atomic Number : <b>${atomNum}</b><br/>
                        Standard State : <b>${standardState}</b><br/>
                        Bonding Type : <b>${bondingType}</b><br/>
                        Boiling Point : <b>${boilingPoint}°C</b><br/>
                        Description : <b>${description}</b>`
                    }
                >
                    <div className="info">
                        <p>{atomNum}</p>
                        <p>{atmMass}</p>
                    </div>
                    
                    <h3>{symbol}</h3>
                    <p className='name'>{name}</p>
                </a>
            </div>
            <Tooltip id="my-tooltip" 
                style={{ 
                    background: '#4c5966',
                    zIndex: '20',
                    opacity: '1',
                    maxWidth: '300px'
                }}
            />
        </>
    )
}