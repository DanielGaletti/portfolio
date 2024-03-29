import { slide as Menu } from 'react-burger-menu';
import './style.css';

const HamburguerMenu = (props) => {
    const stylesDarkMode = {
        bmBurgerBars: {
            background: '#a8a8a0'
        },
        bmMenu: {
            background: '#a8a8a0'
        },
        bmItemList: {
            color: '#001F3F'
        }
    }

    const stylesLightMode = {
        bmBurgerBars: {
            background: '#001F3F'
        },
        bmMenu: {
            background: '#001F3F'
        },
        bmItemList: {
            color: 'black'
        }
    }

    return (
        <>
            <header className={props.mode ? 'dark-header' : 'light-header'}>
                <div className="header-mobile">
                    <Menu right styles={(props.mode ? stylesDarkMode : stylesLightMode)}>
                        <a href="/">Home</a>
                        <a href="/about">About me</a>
                    </Menu>
                </div>

                <div className="header-web">
                    <div />
                    <div>
                        <a href="/">Home</a>
                        <a href="/about">About me</a>
                    </div>
                </div>
            </header>
        </>
    );
}
export default HamburguerMenu;
