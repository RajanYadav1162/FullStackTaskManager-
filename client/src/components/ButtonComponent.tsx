import { Button, MantineColor } from "@mantine/core";
import { MantineSize } from "@mantine/core";
const ButtonComponent = ({
	title,
	size,
	color,
	fullWidth = true,
	onClick,
	input,
}: {
	title: string;
	size: MantineSize;
	color: MantineColor;
	fullWidth?: boolean;
	onClick: () => void;
	input: string;
}) => {
	const onClickHandler = () => {
		onClick();
	};

	return (
		<form>
			<Button
				color={color}
				size={size}
				fullWidth={fullWidth}
				onClick={onClickHandler}
				disabled={input.length < 4 || input.length > 29}
			>
				{title}
			</Button>
		</form>
	);
};

export default ButtonComponent;
