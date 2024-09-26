import "./Home.css"
import WeAreExperts from "../components/home/WeAreExperts"
import Crousal from "../components/common/Crousal";
import Whatwedo from "../components/home/Whatwedo";
import Ourproject from "../components/home/Ourproject";
import Global from "../components/common/Global";
import Industries from "../components/home/Industries";
import Technologies from "../components/home/Technologies";
import News from "../components/home/News";
import Awards from "../components/home/Awards";
import Testimonial from "../components/home/Testimonial";

function Home() {


    return (<>
        <WeAreExperts />
        <div className="bg-[#002A8A]">
            <Crousal />
        </div>
        <Whatwedo />
        <Ourproject />
        <Global />
        <Industries />
        <Technologies />
        <News />
        <Awards />
        <Testimonial />
    </>

    )
}

export default Home     