import data from '../elements.json';
import Metal from './metal';

export default function TableRow () {
    return (
        <div className='table-row'>
            {data.map((element, i)=>(
                <Metal atomNum={i+1} name={element.name} symbol={element.symbol} background={element['cpk-hex']} row={element.period} column={element.group} standardState={element.category} atomicMass={element.atomic_mass}  boilingPoint={element.boil} description={element.summary}/>
            ))}
        </div>
    )
}