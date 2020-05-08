import Wrapper from '../components/Wrapper.js'

const PublicList = () => {

    const events = [
        {
            id: 2,
            text: 'Столкновение на ул. К. Маркса',
        },
        {
            id: 3,
            text: 'Наезд на ул. Циолковского',
        },
    ]

    return (
        <Wrapper>
            {events.map(event => (
                <div
                    key={event.id}
                    className="EventItem"
                >
                    <div className="EventImg"></div>
                    <div
                        className={"EventName"}
                    >{event.text}</div>
                </div>
            ))}

            <style>{`
                .EventItem {
                    display: flex;
                    height: 55px;
                    font-size: 18px;
                    font-family: Roboto;
                    align-items: center;
                    border-top: 1px #eaeaea solid;
                }

                .EventImg {
                    height: 100%;
                    width: 50px;
                    background-color: #f0f0f0;
                    margin-right: 15px;
                }

                .EventName {
                    
                }
            `}</style>
        </Wrapper>
    )    
}
export default PublicList