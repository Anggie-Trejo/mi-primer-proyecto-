import ".Navbar.css";
import {Link} from "react-router-dom";
import RocketIcon from "@mui/icons-material/Rocket";


function Navbar ({header,links})
{
    return
    (
        <nav>
           <div>
            <RocketIcon/>
            <h2>{header}</h2>

           </div>
           <div>
            {
                Links.map((link)=> (
                    <Link to={link.link} key ={link.id}>
                        {link.text}
                    </Link>
                ))}
             </div>

        </nav>
      );

}