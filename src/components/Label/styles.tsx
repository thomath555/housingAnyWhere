/* eslint-disable @typescript-eslint/indent */
import styled, { css } from 'styled-components';

// Other
import colors from '../../assets/styles/colors';
import { FontSizes, FontWeights } from '../../utils/types/enums';

// Types
import { Props } from './types'

export const LabelWrapper = styled.label<Props>`
  display: block;
  position: relative;
${({ fontWeight = FontWeights.default }) =>
    css`
  font-weight: ${fontWeight};
`}

${({ color = '' }) =>
    css`
  color: ${color || colors.black};
`}

${({ fontSize = FontSizes.default }) =>
    css`
    font-size: ${fontSize}rem;
  `}
  `
