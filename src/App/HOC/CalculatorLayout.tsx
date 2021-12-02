import React, { ReactNode } from "react";
import { Box, Card, Container, Grid } from "@mui/material";

export const CalculatorLayout: React.FC<{ total: ReactNode, form: ReactNode }> = ({ total, form }) => {
	return (
		<Container>
			<Box pt={ 5 }>
				<Card>
					<Grid container spacing={ 3 } justifyContent="space-between">
						<Grid xs={ 6 } item>
							<Box p={ 2 }>
								{ form }
							</Box>
						</Grid>
						<Grid xs={ 5 } item>
							<Box pt={ 2 }>
								{ total }
							</Box>
						</Grid>
					</Grid>
				</Card>
			</Box>
		</Container>
	);
};
