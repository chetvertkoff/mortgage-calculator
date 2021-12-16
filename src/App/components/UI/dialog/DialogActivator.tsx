import React from "react";
import { Button } from "@mui/material";
import { BaseDialogProps } from "@/App/components/UI/dialog/DialogBase";

type Props = {
  handleClickOpen: () => void
} & BaseDialogProps

export const DialogActivator: React.FC<Props> = ({
	activatorNode,
	activatorTitle = "Открыть",
	noActivator,
	handleClickOpen
}) => {
	if (noActivator) return <></>;

	return (
		<>
			{
				activatorNode ? activatorNode : (
					<Button
						variant="contained"
						size="large"
						fullWidth
						onClick={ handleClickOpen }
					>
						{ activatorTitle }
					</Button>
				)
			}
		</>
	);
};
