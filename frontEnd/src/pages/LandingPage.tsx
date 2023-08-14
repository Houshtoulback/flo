import WhyChooseUs from "../components/WhyChooseUs";
import Collections from "../components/Collections";
import Blog from "../components/Blog";
import Comments from "../components/Comments";
import Hero from "../components/Hero";

export default function LandingPage() {
    return (
        <div>
            <Hero />
            <WhyChooseUs />
            <Collections />
            <Blog />
            <Comments />;
        </div>
    );
}
