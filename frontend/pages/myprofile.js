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
            <table>
                <tbody>
                    <tr>
                        <td>ФИО</td>
                        <td>Васиьев Василий Васильевич</td>
                    </tr>
                    <tr>
                        <td>E-mail</td>
                        <td>vasya@example.com</td>
                    </tr>
                    <tr>
                        <td>Город</td>
                        <td>Калуга</td>
                    </tr>
                    <tr>
                        <td>Телефон</td>
                        <td>8 (800) 555-35-35</td>
                    </tr>
                    <tr>
                        <td>Адрес регистрации</td>
                        <td>г. Калуга, ул. Пушкина, д. 4, кв. 20</td>
                    </tr>                    
                </tbody>
            </table>

        </Wrapper>
    )    
}

export default MyProfile