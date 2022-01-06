import { hospitals } from "../../hospitals";
import {Link} from "react-router-dom";

const Hospitals=()=> {
    return (
        <div>
            {hospitals.map((list)=>(
                <Link to="/hospital">
                    <div>{list.name}</div>
                </Link>
            ))}
        </div>
    )
}

export default Hospitals;