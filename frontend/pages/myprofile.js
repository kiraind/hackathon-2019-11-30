import Wrapper from '../components/Wrapper.js'

const MyProfile = () => {
    // const token = localStorage.getItem('token')

    // if(token === null) {
    //     Router.push('/login')
    // }

    const user = {
        name: 'Виктор Викторов',
    }

    return (
        <Wrapper>
            <table className="MyProfile">
                <tbody>
                    <tr>
                        <td>ФИО</td>
                        <td contentEditable>Васиьев Василий Васильевич</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td contentEditable>vasya@example.com</td>
                    </tr>
                    <tr>
                        <td>Город</td>
                        <td contentEditable>Калуга</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td contentEditable>8 (800) 555-35-35</td>
                    </tr>
                    <tr>
                        <td>Адрес регистрации</td>
                        <td contentEditable>г. Калуга, ул. Пушкина, д. 4, кв. 20</td>
                    </tr>                    
                </tbody>
            </table>

            <style jsx>{`
                .MyProfile {
                    font-family: Roboto, sans-serif;
                }    
            `}</style>
        </Wrapper>
    )    
}

export default MyProfile