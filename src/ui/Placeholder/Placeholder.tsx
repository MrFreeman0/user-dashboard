import "./Placeholder.scss";

interface IProps {
  title: string;
  description: string;
}

const Placeholder = (props: IProps) => {
  // Destructure
  const { title, description } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default Placeholder;
