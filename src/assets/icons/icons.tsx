import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import type {FontAwesomeIconProps} from "@fortawesome/react-fontawesome";
import {
  faCircleHalfStroke,
  faCircleArrowDown,
  faCircleArrowRight,
  faHouse,
  faMoon,
  faSun,
  faSquareCheck,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import type {IconName, IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface FAIconProps extends Omit<FontAwesomeIconProps, "icon"> {
  iconname: IconName;
}

const iconList: Partial<Record<IconName, IconDefinition>> = {
  "circle-arrow-down": faCircleArrowDown,
  "circle-arrow-right": faCircleArrowRight,
  "circle-half-stroke": faCircleHalfStroke,
  "house-blank": faHouse,
  "square-check": faSquareCheck,
  moon: faMoon,
  sun: faSun,
  square: faSquare,
};

export const FaIcon = (props: FAIconProps) => {
  const {iconname} = props;
  const icon = iconList[iconname];

  return (
    <div>
      {icon ? <FontAwesomeIcon {...props} icon={icon} /> : "Missing Icon"}
    </div>
  );
};
