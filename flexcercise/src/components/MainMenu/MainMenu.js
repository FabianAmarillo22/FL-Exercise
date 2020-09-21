import React, { useState, useEffect } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { Segment, Menu } from 'semantic-ui-react';
import './MainMenu.css';

function MainMenu(props) {
    const { location } = props;
    const [activeMenu, setActiveMenu] = useState(location.pathname);

    const handlerMenu = ( e, menu ) =>  {
        setActiveMenu(menu.to);
    }

    useEffect(() => {
        setActiveMenu(location.pathname)
    }, [location])

    return (
        <div className='mainMenu_Container'>
            <Segment inverted className='mainMenu_Segment'>
                <Menu inverted pointing secondary className='mainMenu_Menu'>
                    <Menu.Item
                    className='mainMenu_Link'
                    as={ Link }
                    to='/'
                    name='Home'
                    active={activeMenu === '/'}
                    onClick={handlerMenu}
                    />
                    <Menu.Item
                    className='mainMenu_Link'
                    as={ Link }
                    to='/AdopcionResponsable'
                    name='AdopcionResponsable'
                    active={activeMenu === '/AdopcionResponsable'}
                    onClick={handlerMenu}
                    />
                    <Menu.Item
                    className='mainMenu_Link'
                    as={ Link }
                    to='/HogarDeAcogida'
                    name='HogarDeAcogida'
                    active={activeMenu === '/HogarDeAcogida'}
                    onClick={handlerMenu}
                    />
                    <Menu.Item
                    className='mainMenu_Link'
                    as={ Link }
                    to='/ColaboraConNosotros'
                    name='ColaboraConNosotros'
                    active={activeMenu === '/ColaboraConNosotros'}
                    onClick={handlerMenu}
                    />
                    <Menu.Item
                    className='mainMenu_Link'
                    as={ Link }
                    to='/Refugios'
                    name='Refugios'
                    active={activeMenu === '/Refugios'}
                    onClick={handlerMenu}
                    />
                    <Menu.Item
                    className='mainMenu_Link'
                    as={ Link }
                    to='/Contacto'
                    name='Contacto'
                    active={activeMenu === '/Contacto'}
                    onClick={handlerMenu}
                    />
                </Menu>
            </Segment>
        </div>
    )
}

export default withRouter(MainMenu);
