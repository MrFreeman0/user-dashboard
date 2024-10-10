import "./AppHeader.scss";

const AppHeader: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  // Destructure
  const { children, className, ...rest } = props;

  return (
    <header className={`${className ?? ""} `} {...rest}>
      {children}
    </header>
  );
};

export default AppHeader;
