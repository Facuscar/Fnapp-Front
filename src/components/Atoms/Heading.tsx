type HeadingProps = {
  children: string;
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading: React.FC<HeadingProps> = ({ as, children }) => {
  const Component = as;
  return <Component>{children}</Component>
};

export default Heading;