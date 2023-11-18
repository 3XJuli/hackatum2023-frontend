import React from 'react'
import config from './config'

class GrafanaDashboard extends React.Component {
    render() {
        //suppose user is received from props
        return (
            <>
                <iframe src="http://158.160.14.120:3000/d-solo/f78930ed-1f5a-4475-a4e5-522fcb70e1f4/electricity-usage?orgId=1&from=1668801442301&to=1700337442301&panelId=1" width="450" height="200" frameBorder="0"></iframe>
            </>
        )
    }
}
export default GrafanaDashboard