import { useContext } from 'react';
import { Icon } from './../common/Icon/Icon'
import { GlobalContext } from '../../provider/Provider';
import './Header.scss';


export const Header = () =>{
    return (
        <header className="Header">
            <Sup />
            <Bottom />
        </header>
    )
}
const Sup     = () => {
    return (
        <div className="Header-sup">
            <div className="Wrapper">
                <Logo    />
                <Nav     />
                <Sign    />
            </div>
        </div>
    )
}
const Logo    = () => {
    return ( 
        <h1 className="Header-h1">
            <a href="#" className="Header-a">
                <Icon nombre="logo"/>
            </a>
        </h1>
        )
}
const Nav     = () => {
    const { header } = useContext(GlobalContext)
    const { menu } = header 

    return (
        <nav className="Header-nav">
            <ul className="Header-ul">
                { menu.map( ({ id , href , title, disabled , active }) => 
                    <li key={ id } className="Header-li">
                        <a 
                            href={ href }
                            className={ `Header-link ${ disabled ? 'disabled' : '' } ${ active ? 'active' : '' }`  }>{ title }</a>
                    </li>
                )}           
            </ul>
        </nav>
    )
}
const Sign    = () => {
    return (
        <div className='Header-extra'>
            <button className="Header-btn">
                <Icon clase="Header-user" nombre="signin" />
                <span className="Header-span">Sign in</span>
            </button>
            <MenuBtn />
        </div>
    )
}
const MenuBtn = () => {
    return (
        <button className="Header-menu">
            <Icon clase='Header-list' nombre="menu" />
        </button>
    )
}
const Bottom  = () => {
    return (
        <div className="Header-bottom">
            15 days till the show
        </div>
    )
}