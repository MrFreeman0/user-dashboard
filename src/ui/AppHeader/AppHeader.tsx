import "./AppHeader.scss";

const AppHeader: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  // Destructure
  const { children, className, ...rest } = props;

  return (
    <header className={`${className ?? ""} app-header`} {...rest}>
      {children}
    </header>
  );
};

export default AppHeader;
