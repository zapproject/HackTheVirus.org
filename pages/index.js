import Link from "next/link";

import Layout from "../components/Layout";
import JoinDiscord from "../components/JoinDiscord";
import MainDiv from "../components/MainDiv";


const Index = () => (
<Layout> 
    <div className="containingdiv">
        <MainDiv />
          
    
    <div className="discord-div"><JoinDiscord className="discord"/></div>  
    </div>
         
</Layout>

);

export default Index;