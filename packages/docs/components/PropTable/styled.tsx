import styled, { css } from 'styled-components';

// TODO: Convert to BigDesign table when built
export const StyledTableFigure = styled.figure`
  margin: ${({ theme }) => `${theme.spacing.xLarge} ${theme.spacing.none}`};
  max-width: 100%;
  overflow-x: auto;
  white-space: nowrap;

  ${({ theme }) => theme.breakpoints.tablet} {
    white-space: normal;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.secondary70};
  text-align: left;
  width: 100%;
`;

export const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.secondary20};
`;

export const StyledTableBody = styled.tbody``;

export const StyledTableFooter = styled.tfoot``;

export const StyledTableRow = styled.tr`
  border-top: ${({ theme }) => theme.border.box};
`;

const SharedCellStyles = css`
  padding: ${({ theme }) => `${theme.spacing.small} ${theme.spacing.small}`};

  &:last-of-type {
    width: 50%;
  }
`;

export const StyledTableHeader = styled.th`
  ${SharedCellStyles}
`;

export const StyledTableData = styled.td`
  ${SharedCellStyles}
`;
