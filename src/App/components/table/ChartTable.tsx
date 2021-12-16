import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { tableHeaderData } from "@/App/data/table-header.data";
import { StoreContextProps, withStoreContext } from "@/App/HOC/withStoreContext";
import { Chart } from "@/Domain/Chart";
import { ChartTableRow } from "@/App/components/table/rows/ChartTableRow";

export const Component: React.FC<StoreContextProps> = ({ state }) => {

	const [chartList, setChartList] = useState<Chart[]>([]);

	const getChartList = async (): Promise<void> => {
		const data = await state.getChartList();
		data && setChartList(data);
	};

	useEffect(() => {
		!chartList.length && getChartList().then();
	});

	return (
		<TableContainer>
			<Table aria-label="simple table">
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
	);
};

export const ChartTable = withStoreContext(Component);
