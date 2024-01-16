import About from "./About/About";
import Catalog from "./Catalog/Catalog";
import Welcome from "./Welcome/Welcome";


const Main = () => {
    return(
        <main className="main">
            <Welcome />
            <About />
            <Catalog />
        </main>
    )
}

export default Main