import Wrapper from '../components/Wrapper.js'

const MyProfile = () => {
    // const token = localStorage.getItem('token')

    // if(token === null) {
    //     Router.push('/login')
    // }

    const user = {
        name: 'Алексей Паксеваткин',
    }

    return (
        <Wrapper>Имя: Василий</Wrapper>
        <Wrapper>Фамилия: Васильев</Wrapper>
        <Wrapper>Отчество: Васильевич</Wrapper>
        <Wrapper>E-mail: VasilExample@mail.ru</Wrapper>
        <Wrapper>Город: Калуга</Wrapper>
        <Wrapper>Телефон: 8(910)8008080</Wrapper>
        <Wrapper>Дата регистрации: 30.11.2019</Wrapper>
    )    
}

export default MyProfile