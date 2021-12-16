import React from "react";
import { ChartHeader } from "@/App/components/ChartHeader";
import { withStoreContext } from "@/App/HOC/withStoreContext";
import { ChartTable } from "@/App/components/table/ChartTable";
import { DialogBase } from "@/App/components/UI/dialog/DialogBase";
import { Box } from "@mui/material";

export const Component: React.FC = (props) => {
	return (
		<DialogBase
			title={ <ChartHeader /> }
			dialogOptions={ { fullWidth: true, maxWidth: "lg" } }
			activatorTitle="График платежей"
		>
			<Box>
				<Box>
					<ChartTable />
				</Box>
			</Box>
		</DialogBase>
	);
};

export const TotalDialog = withStoreContext(Component);
