import Link from "next/link";

import Layout from "../components/Layout";
import JoinDiscord from "../components/JoinDiscord";
import MainDiv from "../components/MainDiv";
import Button from "../components/Button"


const Index = () => (
<Layout> 
    <div className="containingdiv">
        <MainDiv />
          
    
    {/* <div className="discord-div"><JoinDiscord className="discord"/></div> */}
    <Button />
    </div>
    
         
</Layout>

);

export default Index;