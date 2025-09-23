import { NavLink } from "react-router";

export default function Header (){
    return (
              <nav>
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/products" end>
                    products      </NavLink>
                <NavLink to="/deuxiemepage">Deuxieme page</NavLink>
                 <NavLink to="/cats">cats</NavLink>
            </nav>
    )
}