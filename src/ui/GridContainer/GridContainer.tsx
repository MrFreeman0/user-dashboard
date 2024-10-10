import "./GridContainer.scss";

interface IProps {
  children: React.ReactNode;
}

const GridContainer = (props: IProps) => {
  // Destructure
  const { children } = props;
  return <div className="grid-flex-container">{children}</div>;
};

export default GridContainer;
