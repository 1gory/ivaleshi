import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const PaddingGrid = styled(Grid)`
  padding-left: 20px;
  padding-right: 20px;
`;

const PaddingRow = styled(Row)`
  margin-left: -20px;
  margin-right: -20px;
`;

const PaddingCol = styled(Col)`
  padding-left: 20px;
  padding-right: 20px;
`;

export { PaddingGrid, PaddingRow, PaddingCol };
