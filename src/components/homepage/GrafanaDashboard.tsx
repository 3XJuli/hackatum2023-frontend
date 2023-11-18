import React from 'react'

class GrafanaDashboard extends React.Component {
    render() {

        return (
            <>
                <iframe src="http://158.160.14.120:3000/d-solo/f78930ed-1f5a-4475-a4e5-522fcb70e1f4/electricity-usage?orgId=1&from=1697746729858&to=1700342329858&panelId=4&theme=light" className='grafana'></iframe>
            </>
        )
    }
}
export default GrafanaDashboard