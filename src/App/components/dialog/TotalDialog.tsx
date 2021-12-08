import React from "react";
import { DialogBase } from "@/App/UI/dialog/DialogBase";
import { ChartHeader } from "@/App/components/ChartHeader";

export const TotalDialog: React.FC = (props) => {

	return (
		<DialogBase
			title={ <ChartHeader /> }
		>
      test
		</DialogBase>
	);
};
