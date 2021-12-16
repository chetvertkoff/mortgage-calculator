import React from "react";
import { DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { BaseDialogProps } from "@/App/components/UI/dialog/DialogBase";

type Props = {
  handleClose: () => void;
} & BaseDialogProps;

export const DialogBaseTitle: React.FC<Props> = ({
	titleNode,
	title,
	handleClose
}) => {
	if (titleNode) return <>{ titleNode }</>;

	return (
		<DialogTitle sx={ { m: 0, p: 2 } } >
			{ title }
			<IconButton
				aria-label="close"
				onClick={ handleClose }
				sx={ {
					position: "absolute",
					right: 8,
					top: 8,
					color: "text.grey",
				} }
			>
				<CloseIcon />
			</IconButton>
		</DialogTitle>
	);
};
