import { Box, createStyles, MantineColor, Notification } from "@mantine/core";
import { useEffect, useState } from "react";

const NotificationComponent = ({
	notificationTitle,
	color = "green",
}: {
	notificationTitle: string;
	color?: MantineColor;
}) => {
	const [showNotification, setShowNotification] = useState(true);
	useEffect(() => {
		const abortController = new AbortController();
		setTimeout(() => {
			setShowNotification(false);
		}, 3000);
		return () => {
			abortController.abort();
		};
	});
	const { classes } = useStyles();
	const onCloseHandler = () => {
		setShowNotification(false);
	};
	return (
		<>
			{showNotification && (
				<Box className={classes.notificationContainer}>
					<Notification
						className={classes.notification}
						color={color}
						title={notificationTitle}
						onClose={onCloseHandler}
						radius="md"
					>
						Well Done!
					</Notification>
				</Box>
			)}
		</>
	);
};

const useStyles = createStyles((theme) => ({
	notificationContainer: {
		position: "relative",
		height: "100vh",
		width: "100%",
	},

	notification: {
		width: "60%",
		position: "absolute",
		top: 0,
		right: 10,
	},
}));
export default NotificationComponent;
