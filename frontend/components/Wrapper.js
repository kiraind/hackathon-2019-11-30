import Router from 'next/router'
import Head from './Head.js'

import BackArrow from './icons/back.js'

const Wrapper = ({ children }) => {
    // const token = localStorage.getItem('token')

    // if(token === null) {
    //     Router.push('/login')
    // }
    

    return (
        <div className="Wrapper">
            <Head />

            <header>
                <div
                    className="HeaderBack"
                    onClick={() => Router.back()}
                >
                    <BackArrow />
                </div>
            </header>

            {children}

            <style jsx global>{`
                body {
                    margin: 0;
                }

                header {
                    height: 40px;
                    display: flex;
                }

                .HeaderBack {
                    height: 40px;
                    width: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default Wrapper