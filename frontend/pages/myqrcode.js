import Wrapper from '../components/Wrapper.js'

const MyQRCode = () => (
    <Wrapper>
        <div className="MyQRCodeContent">
            
            <img src="/sample-qr.png" />
            <h1>8 (800) 555 35 35</h1>
        </div>

        <style jsx global>{`
            .MyQRCodeContent {
                display: flex;
                flex-direction: column;
                align-items: center;
                height: calc(100vh - 40px);
                justify-content: center;
            }   
            
            .MyQRCodeContent h1 {
                font-family: Roboto;
                margin: 0;
                padding: 0;
                font-size: 18px;
                font-weight: normal;
            } 
        `}</style>
    </Wrapper>
)

export default MyQRCode