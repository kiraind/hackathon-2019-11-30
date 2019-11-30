import Wrapper from '../components/Wrapper.js'

const Contacts = () => {
    const contacts = [
        {
            id: 1,
            name: 'Юлия Сарычева',
        },
        {
            id: 2,
            name: 'Юлия Сарычева',
        },
        {
            id: 3,
            name: 'Юлия Сарычева',
        },
    ]

    return (
        <Wrapper>
            {contacts.map(user => (
                <div
                    key={user.id}
                    className="ContactItem"
                >
                    <div className="ContactAvatar"></div>
                    <div
                         className="ContactName"
                    >{user.name}</div>
                </div>
            ))}

            <style>{`
                .ContactItem {
                    display: flex;
                    height: 55px;
                    font-size: 18px;
                    font-family: Roboto;
                    align-items: center;
                }

                .ContactAvatar {
                    height: 35px;
                    width: 35px;
                    background-color: #eaeaea;
                    border-radius: 50%;
                    margin: 0 10px;
                }

                .ContactName {
                    
                }
            `}</style>
        </Wrapper>
    )
}

export default Contacts