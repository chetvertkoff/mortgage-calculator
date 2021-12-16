import React from "react";
import { ChartHeader } from "@/App/components/ChartHeader";
import { withStoreContext } from "@/App/HOC/withStoreContext";
import { ChartTable } from "@/App/components/table/ChartTable";
import { DialogBase } from "@/App/components/UI/dialog/DialogBase";

export const Component: React.FC = (props) => {

	const onOpen = () => {
		console.log("open");
	};

	return (
		<DialogBase
			title={ <ChartHeader /> }
			dialogOptions={ { fullWidth: true, maxWidth: "lg" } }
			activatorTitle="График платежей"
			onOpen={ onOpen }
		>
			<ChartTable />
		</DialogBase>
	);
};

export const TotalDialog = withStoreContext(Component);
