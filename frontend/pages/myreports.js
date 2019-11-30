import Wrapper from '../components/Wrapper.js'

const MyReports = () => {
    const reports = [
        {
            id: 1,
            name: 'Неправильная парковка',
            status: 1,
        },
        {
            id: 2,
            name: 'Яма на улице Ленина',
            status: 0,
        },
    ]

    return (
        <Wrapper>
            {reports.map(report => (
                <div
                    key={report.id}
                    className="ReportItem"
                >
                    <div className="ReportImg"></div>
                    <div
                        className={"ReportName" + ([
                            ' pending',
                            ' resolved',
                            ' refused',
                        ])[report.status]}
                    >{report.name}</div>
                </div>
            ))}

            <style>{`
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

export default MyReports