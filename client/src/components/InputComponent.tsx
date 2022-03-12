import { Input, InputVariant, MantineSize } from "@mantine/core";
import React from "react";

const InputComponent = ({
	size,
	placeholder,
	variant,
	invalid = false,
	autofocus = false,
	value,
	onChange,
	onEnter,
}: {
	size: MantineSize;
	placeholder: string;
	variant: InputVariant;
	invalid: boolean;
	autofocus: boolean;
	value?: string;
	onEnter: () => void;
	onChange: (currentInput: string) => void;
}) => {
	const onChangeHandler = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		onChange(event.target.value);
	};
	const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") onEnter();
	};
	return (
		<Input
			size={size}
			placeholder={placeholder}
			variant={variant}
			invalid={invalid}
			autoFocus={autofocus}
			value={value}
			onChange={onChangeHandler}
			onKeyPress={onKeyPressHandler}
		/>
	);
};

export default InputComponent;
