import Image from "next/image"

import logo from "@public/assets/logo.svg";

const Logo: React.FC = () => (
  <Image src={logo} alt="Green Fnapp logo" width={40} height={40} />
);

export default Logo;