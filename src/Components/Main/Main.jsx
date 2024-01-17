import About from "./About/About";
import Catalog from "./Catalog/Catalog";
import New from "./New/New";
import Welcome from "./Welcome/Welcome";


const Main = () => {
    return(
        <main className="main">
            <Welcome />
            <About />
            <Catalog />
            <New />
        </main>
    )
}

export default Main