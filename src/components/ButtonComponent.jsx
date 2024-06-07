import { Link } from "react-router-dom";




const ButtonComponent = ({ btnURI, btnProps, btnText }) => {
  return (
    <Link to={btnURI} className={btnProps}>
        {btnText}
    </Link>
  )
}

export default ButtonComponent
