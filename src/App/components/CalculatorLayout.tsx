import React, { ReactNode } from "react";
import { Box, Card, Container, Grid } from "@mui/material";

export const CalculatorLayout: React.FC<{ total: ReactNode, form: ReactNode }> = ({ total, form }) => {
	return (
		<Container>
			<Card>
				<Box>
					<Grid container spacing={ 3 } justifyContent="space-between">
						<Grid xs={ 5 } item>
							<Box p={ 2 }>
								{ form }
							</Box>
						</Grid>
						<Grid xs={ 5 } item>
							<Box p={ 2 }>
								{ total }
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Card>
		</Container>
	);
};
