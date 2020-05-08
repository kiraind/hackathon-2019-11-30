import Wrapper from '../components/Wrapper.js'

import config from '../config.js'
import Router from 'next/router'

const AddReport = () => {
    const imageSrc = process.browser ?
        localStorage.getItem('current-photo')
        : null



    return (
        <Wrapper>
            { imageSrc !== null && (
                <div
                    className="ReportImage"
                    // src={imageSrc}
                />
            ) }

            <h1>Отправить жалобу</h1>

            <p contentEditable>Добрый день! 19 ноября 2016 года в 14 часов 16 минут водитель автомобиля Volvo (регистрационный знак A015КМ777) нарушил пункт 12.2 правил дорожного движения и поставил свой автомобиль на стоянку на тротуаре и на газоне. Нарушение произошло по адресу г.Москва, Улица ул. , д. № Прошу наказать нарушителя по части 6 статьи 12.19 КоАП и сообщить мне о результатах рассмотрения данного дела.</p>

            <div
                className="SendButton"
                onClick={() => Router.push('/')}
            >Отправить</div>

            <style jsx>{`
                .ReportImage {
                    width: 100vw;
                    height: 100px;
                    background-image: url(${imageSrc});
                    background-size: cover;
                    background-position: center center;
                }

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
}

async function sendReport(text, photo) {
    const obj = {
        type: 'addreport',
        text,
        photo,
    }

    const rawResponse = await fetch(config.post_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(obj)
    });

    const content = await rawResponse.json();

    console.log(content)
}

export default AddReport