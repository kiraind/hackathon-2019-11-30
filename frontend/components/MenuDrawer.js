import Router from 'next/router'

const MenuDrawerItem = ({ children, href }) => (
    <div
        className="MenuDrawerItem"
        onClick={() => Router.push(href)}
    >
        <div className="MenuDrawerItemContent">
            {children}
        </div>
    </div>
)

const MenuDrawer = ({ shown, onClose }) => (
    <div className={'MenuDrawer' + (shown ? ' shown' : '')}>

        <div className="MenuDrawerContent">
            <MenuDrawerItem href="/myprofile">Мой профиль</MenuDrawerItem>
            <MenuDrawerItem href="/contacts">Мои контакты</MenuDrawerItem>
            <MenuDrawerItem href="/messages">Мои сообщения</MenuDrawerItem>
            <MenuDrawerItem href="/myreports">Мои жалобы</MenuDrawerItem>
            <MenuDrawerItem href="/publiclist">Список ДТП</MenuDrawerItem>
            <MenuDrawerItem href="/about">О сервисе</MenuDrawerItem>
            {/* <MenuDrawerItem></MenuDrawerItem> */}
        </div>
        <div
            className="MenuDrawerFiller"
            onClick={onClose}
        />

        <style jsx global>{`
            .MenuDrawer {
                position: fixed;
                
                height: 100%;
                width: 100vw;
                
                
                top: 0;
                left: -100%;
                transition: left 0.2s ease-out;

                display: flex;
            }

            .MenuDrawer.shown {
                left: 0;
            }

            .MenuDrawerContent {
                height: 100%;
                background-color: white;
                width: calc(100vw - 50px);
                box-shadow: 0 0 15px #0000006b;
            }

            .MenuDrawerFiller {
                width: 50px;
                height: 100%;
            }

            .MenuDrawerItem {
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #ececec;
            }

            .MenuDrawerItem:active {
                background-color: #eaeaea;
            }

            .MenuDrawerItemContent {
                margin-left: 20px;
                font-size: 18px;
                font-family: Roboto, sans-serif;
            }

        `}</style>
    </div>
)

export default MenuDrawer