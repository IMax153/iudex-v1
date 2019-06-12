import { css, createGlobalStyle } from '../../../styles';

const projectStyles = css`
  html {
    height: 100vh;
  }

  body {
    height: 100%;
  }

  #__next {
    height: 100%;
  }

  @-webkit-keyframes autofill {
    to {
      background: transparent;
      color: ${({ theme }) => theme.text.colors.primary};
    }
  }

  /* Change Autocomplete styles in Chrome*/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
  }
`;

export const ProjectStyles = createGlobalStyle`${projectStyles}`;
