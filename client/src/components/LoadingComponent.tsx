import { Skeleton } from "@mantine/core";

const LoadingComponent = () => {
	return (
		<>
			<Skeleton height={8} radius="xl" mt={20} />
			<Skeleton height={8} mt={20} radius="xl" />
			<Skeleton height={8} mt={20} radius="xl" />
			<Skeleton height={8} mt={20} radius="xl" />
		</>
	);
};

export default LoadingComponent;
