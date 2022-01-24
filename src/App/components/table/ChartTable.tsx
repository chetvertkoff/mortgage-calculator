import React, { useEffect, useState } from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { tableHeaderData } from "@/App/data/table-header.data";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { Chart } from "@/Domain/Chart";
import { ChartTableRow } from "@/App/components/table/rows/ChartTableRow";

export const Component: React.FC<StoreContextProps> = ({ state, dispatch }) => {
	const [chartList, setChartList] = useState<Chart[]>([]);

	useEffect(() => {
		const getChartList = async (): Promise<void> => {
			dispatch({ type: "GET_CHART_LIST" });

			const data = await state.chartList.getChartlist();
			data && setChartList(data);
		};

		!chartList.length && getChartList().then();
	}, []);

	return (
		<Paper sx={ { width: "100%", overflow: "hidden" } }>
			<TableContainer sx={ { height: "75vh" } }>
				<Table aria-label="sticky table" stickyHeader>
					<TableHead>
						<TableRow>
							{ tableHeaderData.map((header, i) => (
								<TableCell key={ i }>
									<Typography variant="h6">{ header }</Typography>
								</TableCell>
							)) }
						</TableRow>
					</TableHead>
					<TableBody>
						{ chartList.map((row, i) => (
							<ChartTableRow key={ i } item={ row } />
						)) }
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	);
};

export const ChartTable = withStoreContext(Component);
