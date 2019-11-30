import Router from 'next/router'

import Wrapper from '../components/Wrapper.js'

const MyQRCode = () => (
    <Wrapper>
        <p contentEditable>
            Опишите ваше ДТП
        </p>

        <div
            className="SendButton"
            onClick={() => Router.push('/')}
        >Отправить</div>

        <style jsx>{`
                h1 {
                    font-size: 20px;
                    font-family: Roboto;
                    font-weight: normal;
                    margin: 10px 15px;
                }

                p {
                    padding: 0 16px;
                    font-size: 14px;
                    font-family: Roboto;
                    outline: none;
                }

                .SendButton {
                    font-size: 16px;
                    font-family: Roboto;
                    font-weight: normal;
                    margin: 0 15px;
                    border: 2px solid black;
                    display: inline-block;
                    padding: 2px 7px;
                }
            `}</style>
    </Wrapper>
)

export default MyQRCode