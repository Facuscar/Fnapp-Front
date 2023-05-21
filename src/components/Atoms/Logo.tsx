import Image from 'next/image';

import SVGLogo from '@public/assets/logo.svg';

const Logo: React.FC = (props) => (
  <Image src={SVGLogo} alt='Green Fnapp logo' width={40} height={40} {...props} />
);

export default Logo;
