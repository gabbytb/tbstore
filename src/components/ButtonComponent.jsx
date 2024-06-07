const ButtonComponent = ({ btnType, btnProps, btnText }) => {
  return (
    <button type={btnType} className={btnProps}>
        {btnText}
    </button>
  );
};
export default ButtonComponent;
