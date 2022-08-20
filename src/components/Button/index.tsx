import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from "./types";

function Button(props: ButtonProps) {
  const {
    children,
    classStyle,
    startIcon,
    endIcon,
    widthIcon,
    heightIcon,
    colorIcon,
    txtColor,
    ...rest
  } = props;

  return (
    <button
      className={
        classStyle
          ? classStyle
          : "bg-blue-500 rounded-md md:p-2 p-1 text-xs md:text-sm flex justify-around items-center text-white"
      }
      {...rest}
    >
      {startIcon && (
        <FontAwesomeIcon
          icon={startIcon}
          className="mr-2"
          width={widthIcon ? widthIcon : 12}
          height={heightIcon ? heightIcon : 12}
          color={colorIcon ? colorIcon : "white"}
        />
      )}

      {children}

      {endIcon && (
        <FontAwesomeIcon
          icon={endIcon}
          className="ml-2"
          width={widthIcon ? widthIcon : 12}
          height={heightIcon ? heightIcon : 12}
          color={colorIcon}
        />
      )}
    </button>
  );
}

export default Button;
