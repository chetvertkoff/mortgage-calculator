import React, { ReactNode } from 'react';
import { Box, Card, Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';

export const FormLayout: React.FC<{children: ReactNode}> = ({ children }) => (
  <Container>
    <Box pt={5}>
      <Card>
        <Grid container spacing={3} justifyContent="space-between">
          {children}
        </Grid>
      </Card>
    </Box>
  </Container>
);
