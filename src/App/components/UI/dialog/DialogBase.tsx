import React, { ReactNode } from "react";
import { Dialog, DialogContent } from "@mui/material";
import { DialogProps } from "@mui/material/Dialog/Dialog";
import { DialogActivator } from "@/App/components/UI/dialog/DialogActivator";
import { DialogBaseTitle } from "@/App/components/UI/dialog/DialogBaseTitle";

export type BaseDialogProps = {
  dialogOptions?: Omit<DialogProps, "open">,

  disabled: boolean,

  activatorNode?: ReactNode,
  noActivator?: boolean,
  activatorTitle?: string,

  titleNode?: ReactNode,
  title?: string | ReactNode,

  actionNode?: ReactNode,
  noActions?: boolean,

  onOpen?: () => any,

  children?: ReactNode
}

export const DialogBase: React.FC<BaseDialogProps> = (props) => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
		props.hasOwnProperty.call(props, "onOpen") && props.onOpen?.();
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
				{ ...props.dialogOptions }
			>
				<DialogBaseTitle { ...props } handleClose={ handleClose } />
				<DialogContent dividers>
					{ props.children }
				</DialogContent>
			</Dialog>
		</>
	);
};
