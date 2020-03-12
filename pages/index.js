import Link from "next/link";

import Layout from "../components/Layout";
import JoinDiscord from "../components/JoinDiscord";
import MainDiv from "../components/MainDiv";
import Button from "../components/Button";
import DiscordSlinky from "../components/DiscordSlinky";


const Index = () => (
<Layout> 
    <div className="containingdiv">
        <MainDiv />
          
    
    {/* <div className="discord-div"><JoinDiscord className="discord"/></div> */}
    {/* <Button /> */}
        <DiscordSlinky />
    </div>
    
         
</Layout>

);

export default Index;