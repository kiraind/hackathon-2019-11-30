import Wrapper from '../components/Wrapper.js'

const MyReports = () => {
    const  [hasError, setErrors]  = useState(false)
    const  [reports, setReports]  = useState({ reports: [] })


    useEffect(() =>
        loadReports()
            .then(res => this.setState({ reports: res }))
            .catch(() => this.setState({ hasErrors: true }))
    );

    return (
        <Wrapper>
            {reports.reports.map(report => (
                <div
                    key={report.id}
                    className="ReportItem"
                >
                    <div className="ReportImg">
                        <style jsx>{`
                            .ReportImg {
                                background-image: url(${report.photo});
                                background-size: cover;
                                background-position: center center;
                            }
                        `}</style>
                    </div>
                    <div
                        className={"ReportName" + ([
                            ' pending',
                            ' resolved',
                            ' refused',
                        ])[report.status]}
                    >{report.name}</div>
                </div>
            ))}

            <style jsx>{`
                .ReportItem {
                    display: flex;
                    height: 55px;
                    font-size: 18px;
                    font-family: Roboto;
                    align-items: center;
                    border-top: 1px #eaeaea solid;
                }

                .ReportImg {
                    height: 100%;
                    width: 50px;
                    background-color: #f0f0f0;
                    margin-right: 15px;
                }

                .ReportName {
                    
                }

                .ReportName.pending {
                    color: #c7a100;
                }

                .ReportName.resolved {
                    color: #11c700;
                }

                .ReportName.refused {
                    color: #ff4e4e;
                }
            `}</style>
        </Wrapper>
    )
}

async function loadReports() {
    const obj = {
        type: 'viewreports'
    }

    const rawResponse = await fetch('/api/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    });

    const content = await rawResponse.json();

    return content
}

export default MyReports