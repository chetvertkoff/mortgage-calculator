import React, { ReactNode } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { DialogActivator } from "@/App/UI/dialog/DialogActivator";
import { DialogBaseTitle } from "@/App/UI/dialog/DialogBaseTitle";

export type BaseDialogProps = {
  activatorNode?: ReactNode,
  noActivator?: boolean,
  activatorTitle?: string,

  titleNode?: ReactNode,
  title?: string | ReactNode,

  actionNode?: ReactNode,
  noActions?: boolean,

  children: ReactNode
}

export const DialogBase: React.FC<BaseDialogProps> = (props) => {

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<DialogActivator { ...props } handleClickOpen={ handleClickOpen } />
			<Dialog
				onClose={ handleClose }
				aria-labelledby="customized-dialog-title"
				open={ open }
			>
				<DialogBaseTitle { ...props } handleClose={ handleClose } />
				<DialogContent dividers>
					{ props.children }
				</DialogContent>
			</Dialog>
		</>
	);
};
