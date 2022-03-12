import { Tabs } from "@mantine/core";
import { useEffect } from "react";

const TabComponent = ({
	onTabChange,
	currentTab,
}: {
	onTabChange: (id: number) => void;
	currentTab: number;
}) => {
	useEffect(() => {
		onTabChange(0);
	}, []);
	return (
		<Tabs
			active={currentTab}
			onTabChange={onTabChange}
			position="center"
			color="green"
		>
			<Tabs.Tab label="All"> </Tabs.Tab>
			<Tabs.Tab label="Active"> </Tabs.Tab>
			<Tabs.Tab label="Completed"> </Tabs.Tab>
		</Tabs>
	);
};

export default TabComponent;
