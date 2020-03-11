import Layout from "../components/Layout";
import "../components/explore.scss"

const ExploreView = props => <Layout>
    <div className="explore-interface">
        <h1>Welcome to the COVID-19 Hackathon:</h1>
        <ul>
            <li><a>Virus Information</a></li>
            <li><a>Spread Dashboard</a></li>
            <li><a>Prevention Equipment</a></li>
            <li><a>About</a></li>
        </ul>
    </div>
    </Layout>;

export default ExploreView;