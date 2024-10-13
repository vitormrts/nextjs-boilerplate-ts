import styled, { css } from 'styled-components';

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weights.bold};
    line-height: ${theme.font.lineHeights.lg};
    color: ${theme.colors.primary.main};
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    font-weight: ${theme.font.weights.medium};
    line-height: ${theme.font.lineHeights.md};
    color: ${theme.colors.primary.main};
  `}
`;