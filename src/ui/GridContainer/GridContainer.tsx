import "./GridContainer.scss";

interface IProps {
  children: React.ReactNode;
}

const GridContainer = (props: IProps) => {
  // Destructure
  const { children } = props;
  return <div>{children}</div>;
};

export default GridContainer;
