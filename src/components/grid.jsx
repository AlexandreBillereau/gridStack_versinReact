import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
import { useEffect, useState } from 'react';

const Grid = () =>{

    // ceci ne marche pas il faut dabor charger la page
    // const [grid, setGrid] = useState(GridStack.init())
    useEffect(() => {
        let grid = GridStack.init()
        grid.addWidget({w: 2, content: 'item 1'});
    })

    return <>
                <div className="grid-stack"></div>
           </>
}
export default Grid