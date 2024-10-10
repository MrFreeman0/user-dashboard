import "./Placeholder.scss";

interface IProps {
  title: string;
  description: string;
}

const Placeholder = (props: IProps) => {
  // Destructure
  const { title, description } = props;

  return (
    <div className="placeholder-container">
      <div className="placeholder-surface">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Placeholder;
