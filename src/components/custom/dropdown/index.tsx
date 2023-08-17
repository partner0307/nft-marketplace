import React from "react";

import "./style.css";
import Icon from "../icon";
import { Flex } from "../../basic";

type DropdownPropsType = {
	initialLabel?: string | React.ReactNode;
	label?: string;
	hideIcon?: boolean;
	onClose?: any;
	container?: any;
	customIcon?: any;
	rightSide?: any;
	isTop?: boolean;
	isSm?: boolean;
};

const Dropdown: React.FC<DropdownPropsType> = ({
	initialLabel,
	label,
	hideIcon,
	onClose,
	container,
	customIcon,
	rightSide,
	isTop,
	isSm,
	...rest
}) => {
	const [isDropdown, setIsDropdown] = React.useState(false);
	const dropdownRef = React.useRef<HTMLDivElement | null>(null);

	React.useEffect(() => {
		const windowClick = (e: any) => {

			if (isDropdown === true) return;

			if (dropdownRef !== null && dropdownRef?.current !== null) {
				if (!dropdownRef.current.contains(e.target)) {
					setIsDropdown(false);
				}
			}
		};

		window.addEventListener("click", windowClick);

		return () => window.removeEventListener("click", windowClick);
	}, [isDropdown]);

	return (
		<div ref={dropdownRef} className={`dropdown ${isSm ? 'dropdown-sm' : ''}`}>
			<div
				className="dropdown-picker"
				onClick={() => setIsDropdown(!isDropdown)}
			>
				<Flex $style={{
					hAlign: "center",
				}}>
					{rightSide && (
						<div className="dropdown-right-side">
							{rightSide}
						</div>
					)}
					<span>
						{label === undefined
							? initialLabel !== undefined
							? initialLabel
							: "Select the item"
							: label}
					</span>
				</Flex>
				{!hideIcon ? <Icon icon="ChevronArrowDown" /> : customIcon ? customIcon : ''}
			</div>
			{container !== undefined && (
				<div
					className={`dropdown-box ${
						isDropdown ? "dropdown-box-show" : "dropdown-box-hide"
					} ${
						isTop ? "dropdown-slide-top" : ""
					}`}
				>
					{container(() => setIsDropdown(false))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;