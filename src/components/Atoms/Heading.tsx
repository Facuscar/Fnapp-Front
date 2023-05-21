import { type ReactNode, type DetailedHTMLProps, type HTMLAttributes } from 'react';

type HeadingProps = {
  children: string | ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

const Heading: React.FC<HeadingProps> = ({ as, children, ...props }) => {
  const Component = as;
  return <Component {...props}>{children}</Component>
};

export default Heading;
