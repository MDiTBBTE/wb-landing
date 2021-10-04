import "./Button.scss";

export const Button = ({
  type,
  name,
  onClick,
  isBlue,
  isImg,
  isDisable,
  styles,
  innerStyles,
}) => {
  return (
    <div className="btn">
      <div className="btn_inner" style={innerStyles}>
        <button
          type={type || "button"}
          className="btn_inner_main"
          style={{
            backgroundColor: isDisable ? "#ccc" : isBlue ? "#1343EA" : "#fff",
            borderColor: isBlue ? '#1343EA' : '#D6DADE',
            color: isBlue ? "#fff" : "#0A0D27",
            display: isImg ? "flex" : "block",
            alignItems: isImg ? "baseline" : "",
            justifyContent: isImg ? "center" : "",
            ...styles,
          }}
          disabled={isDisable || false}
          onClick={onClick}
        >
          {isImg && (
            <img
              className="btn_inner_main_img"
              src="/images/navbar/plus_w.svg"
              alt="plus"
            />
          )}
          {name}
        </button>
      </div>
    </div>
  );
};
