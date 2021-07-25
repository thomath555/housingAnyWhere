import colors  from './colors';
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    font-variant-ligatures: none;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip-ink: auto;
  }

  .ant-modal-content {
    background: ${colors.mediumGrey};
  }

  .ant-modal-title {
    color: ${colors.white};
  }

  .ant-modal-footer {
    border-top: 1px solid ${colors.black};
  }

  .ant-modal-header {
    background: ${colors.mediumGrey};
    border-bottom: 1px solid ${colors.black};
  }

  .ant-btn-primary {
    font-weight: 600; 
    background: ${colors.themeColor};
    border: none;
  }

  .ant-btn-primary:hover, .ant-btn-primary:focus {
    background: ${colors.themeColor};
  }

  img {
    vertical-align: middle;
  }
`;
