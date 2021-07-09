import { useContext, useEffect } from "react";
import Actions from "../components/actions";
import DrawerHeadTools from "../components/drawer-head-tools";
import SideNav from "../components/side-nav";
import Editor from '../components/sampleRete';
import Properties from "../components/properties";
import { AuthContext } from "../components/Context/context";

function Dashboard() {
    const { state } = useContext(AuthContext);

    const { properties,closeP } = state;

    return <section className="dashboard">
        <div className="sidebar">
            <SideNav />
        </div>
        <Actions />
        <div className="drawer">
            <DrawerHeadTools />
            <Editor />
           {properties && <div class="drawer-properties">
                <Properties host={"open"} />
            </div>}
            {closeP && <div class="drawer-properties">
                <Properties  host={"close"} />
            </div>}
        </div>
    </section>
}

export default Dashboard;