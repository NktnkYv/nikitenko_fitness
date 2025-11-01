import About from "./Sections/About/About.jsx";
import Prices from "./Sections/Prices/Prices.jsx";
import Reviews from "./Sections/Reviews/Reviews.jsx";
import Motivation from "./Sections/Motivation/Motivation.jsx";
import Slider from "../Slider/Slider.jsx";

function Content() {
    return (
        <main className="content">
            <About/>
            <Motivation/>
            <Prices/>
            <Slider/>
            <Reviews/>
        </main>
    )
}

export default Content