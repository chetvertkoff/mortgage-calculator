import React from "react";
import { ChartHeader } from "@/App/components/ChartHeader";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { ChartTable } from "@/App/components/table/ChartTable";
import { DialogBase } from "@/App/components/UI/dialog/DialogBase";

export const Component: React.FC<StoreContextProps> = ({ state: { isInvalid } }) => (
	<DialogBase
		title={ <ChartHeader /> }
		dialogOptions={ { fullWidth: true, maxWidth: "lg" } }
		activatorTitle="График платежей"
		disabled={ isInvalid }
	>
		<ChartTable />
	</DialogBase>
);

export const TotalDialog = withStoreContext(Component);
