import TMImage from '../../ui.kit/Image';
import banner1 from '../../assets/images/banner1-med.png';

const Banner = () => {
  return (
    <div className="grid grid-cols-2 min-h-[500px] h-[90vh] bg-home-banner bg-contain">
      <div className="flex items-center justify-center">
        <h1 className="font-exoBold leading-normal pl-24">
          Buy with Confidence from
          <br /> <span>Verified</span> and <span>Trusted</span>
          <br /> Instragram Sellers
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <TMImage
          src={banner1}
          alt="A Graphic shown as a shield with digital lines on it to represent online safety with TrustMe"
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
