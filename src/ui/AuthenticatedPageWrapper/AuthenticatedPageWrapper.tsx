import './AuthenticatedPageWrapper.scss'

interface IProps {
  children: React.ReactNode
}

const AuthenticatedPageWrapper = (props: IProps) => {
  //Destructure
  const {children} = props;

  return (
    <div>{children}</div>
  )
}

export default AuthenticatedPageWrapper