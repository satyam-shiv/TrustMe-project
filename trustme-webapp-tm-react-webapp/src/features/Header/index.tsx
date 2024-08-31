import { PrimaryButton } from '../../ui.kit/Button';
import Navigation from '../Navigation';

const Header = () => (
  <div className="flex w-full py-5 bg-tm-primary-bg sticky">
    <div className="w-4/6 mx-auto flex">
      <div className="w-3/12 align-middle text-5xl font-euclidCircularBRegular">TrustMe</div>
      <Navigation className="w-7/12" />
      <div className="w-2/12 flex justify-end">
        <PrimaryButton className="">For Sellers</PrimaryButton>
      </div>
    </div>
  </div>
);

export default Header;
