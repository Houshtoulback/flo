import cactus from "../assets/cactus.jpg";
import succulent from "../assets/succulent.jpg";
import bonsai from "../assets/bonsai.jpg";
import indoor from "../assets/indoorPlants.jpg";

const bgGradient = {
    background: "rgb(255,255,255)",
    backgroundImage:
        "linear-gradient(0deg, rgba(255,255,255,1) 87%, #f4f4f4 100%)",
};

function CollectionItem(props: { image: string; title: string }) {
    const { image, title } = props;
    return (
        <div className="flex flex-col items-center">
            <img className="" src={image} />
            <p className="capitalize font-medium text-black-300 text-base lg:text-xl text-center">
                {title}
            </p>
        </div>
    );
}

export default function Collections() {
    return (
        <div
            className="py-10  grid grid-cols-2 xl:grid-cols-4 place-items-center"
            style={bgGradient}
        >
            <CollectionItem image={cactus} title="cactus" />
            <CollectionItem image={bonsai} title="bonsai" />
            <CollectionItem image={succulent} title="succulent" />
            <CollectionItem image={indoor} title="indoor plants" />
        </div>
    );
}
