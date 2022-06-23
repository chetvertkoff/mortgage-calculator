import React, { useEffect } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { tableHeaderData } from "@/App/data/table-header.data";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { ChartTableRow } from "@/App/components/table/rows/ChartTableRow";
import { actions } from "@/App/store/actions";

export const Component: React.FC<StoreContextProps> = ({ state: { chartList }, dispatch }) => {

	useEffect(() => {
		dispatch(actions.getChartList());
	}, []);

	return (
		<Paper sx={ { width: "100%", overflow: "hidden" } }>
			<TableContainer sx={ { height: "75vh" } }>
				<Table aria-label="sticky table" stickyHeader>
					<TableHead>
						<TableRow>
							{tableHeaderData.map((header, i) => (
								<TableCell key={ i }>
									<Typography variant="h6">{header}</Typography>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{chartList.map((row, i) => (
							<ChartTableRow key={ i } item={ row } />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export const ChartTable = withStoreContext(Component);
