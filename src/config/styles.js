import { createGlobalStyle } from 'styled-components';

// fonts
import OpenSansLightEot from '../assets/fonts/OpenSans-Light.eot';
import OpenSansLightTtf from '../assets/fonts/OpenSans-Light.ttf';
import OpenSansRegularEot from '../assets/fonts/OpenSans-Regular.eot';
import OpenSansRegularTtf from '../assets/fonts/OpenSans-Regular.ttf';
import OpenSansItalicEot from '../assets/fonts/OpenSans-Italic.eot';
import OpenSansItalicTtf from '../assets/fonts/OpenSans-Italic.ttf';
import OpenSansSemiboldEot from '../assets/fonts/OpenSans-Semibold.eot';
import OpenSansSemiboldTtf from '../assets/fonts/OpenSans-Semibold.ttf';
import OpenSansBoldEot from '../assets/fonts/OpenSans-Bold.eot';
import OpenSansBoldTtf from '../assets/fonts/OpenSans-Bold.ttf';
// icons font
import IcomoonEot from '../assets/fonts/icomoon.eot';
import IcomoonTtf from '../assets/fonts/icomoon.ttf';
import IcomoonSvg from '../assets/fonts/icomoon.svg';
import IcomoonWoff from '../assets/fonts/icomoon.woff';

export const theme = {
  background: {
    body: '#f8f9fa',
    appMenu: '#fff',
    container: '#fff',
  },
  color: {
    white: '#ffffff',
    lighterGray: '#efefef',
    lightGray: '#b5b5b7',
    gray: '#677077',
    darkGray: '#3f4147',
    yellow: '#ffd91b',
    red: '#bf3e3a',
    green: '#73df89',
    blue: '#64d4f5',
    purple: '#a8a3ed',
    facebook: '#3b5998',
    twitter: '#1da1f2',
    google: '#dd4b39',
    github: '#333333',
    linkedin: '#0077b5',
    button: {
      yellow: '#ffd91b',
      red: '#e74c3c',
      green: '#259f56',
      purple: '#a8a3ed',
      grey: '#efefef',
    },
  },
  size: {
    root: '16px',
    XXS: '0.5rem', // 8px
    XS: '0.625rem', // 10 px
    S: '0.75rem', // 12 px
    M: '0.875rem', // 14px
    L: '1rem', // 16px
    XL: '1.125rem', // 18 px
    XXL: '1.25rem', // 20 px
  },
  shadow: {
    default: '0 0 10px 2px rgba(0, 0, 0, 0.03)',
    documentItem: '0 2px 2px 1px rgba(0, 0, 0, 0.05)'
  }
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans Light';
    src: url('${OpenSansLightEot}?#iefix') format('embedded-opentype'),
    url('${OpenSansLightTtf}') format('truetype');
  }
  
  @font-face {
    font-family: 'Open Sans';
    src: url('${OpenSansRegularEot}?#iefix') format('embedded-opentype'),
    url('${OpenSansRegularTtf}') format('truetype');
  }
  
  @font-face {
    font-family: 'Open Sans Italic';
    src: url('${OpenSansItalicEot}?#iefix') format('embedded-opentype'),
    url('${OpenSansItalicTtf}') format('truetype');
  }
  
  @font-face {
    font-family: 'Open Sans Semi Bold';
    src: url('${OpenSansSemiboldEot}?#iefix') format('embedded-opentype'),
    url('${OpenSansSemiboldTtf}') format('truetype');
  }
  
  @font-face {
    font-family: 'Open Sans Bold';
    src: url('${OpenSansBoldEot}?#iefix') format('embedded-opentype'),
    url('${OpenSansBoldTtf}') format('truetype');
  }
  
  @font-face {
    font-family: 'icomoon';
    src:  url('${IcomoonEot}?yhoun9');
    src:  url('${IcomoonEot}?yhoun9#iefix') format('embedded-opentype'),
    url('${IcomoonTtf}?yhoun9') format('truetype'),
    url('${IcomoonWoff}?yhoun9') format('woff'),
    url('${IcomoonSvg}?yhoun9#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  
  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
  
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-membre:before {
    content: "\\e90f";
  }
  
  .icon-mail_rounded:before {
    content: "\\e914";
  }
  
  .icon-security:before {
    content: "\\e915";
  }
  
  .icon-parameters:before {
    content: "\\e916";
  }
  
  .icon-close:before {
    content: "\\e917";
  }
  
  .icon-vote:before {
    content: "\\e90d";
  }
  
  .icon-texte:before {
    content: "\\e90e";
  }
  
  .icon-dashboard:before {
    content: "\\e910";
  }
  
  .icon-lien:before {
    content: "\\e911";
  }
  
  .icon-compte-rendu:before {
    content: "\\e912";
  }
  
  .icon-image_responsive:before {
    content: "\\e913";
  }
  
  .icon-automatisation:before {
    content: "\\e900";
  }
  
  .icon-check:before {
    content: "\\e901";
  }
  
  .icon-document:before {
    content: "\\e902";
  }
  
  .icon-facebook:before {
    content: "\\e903";
  }
  
  .icon-home:before {
    content: "\\e904";
  }
  
  .icon-mail:before {
    content: "\\e905";
  }
  
  .icon-message:before {
    content: "\\e906";
  }
  
  .icon-password:before {
    content: "\\e907";
  }
  
  .icon-phone:before {
    content: "\\e908";
  }
  
  .icon-plus:before {
    content: "\\e909";
  }
  
  .icon-salle:before {
    content: "\\e90a";
  }
  
  .icon-tache:before {
    content: "\\e90b";
  }
  
  .icon-twitter:before {
    content: "\\e90c";
  }
  
  @keyframes blinker {
    50% {
      opacity: 0.6;
    }
  }

  html, body {
    background: ${theme.background.main};
    color: ${theme.color.darkGray};
    font: ${theme.size.root} "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    margin: 0;
    border: 0;
  }
  
  #root {
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  
  a {
    color: #999a9c;
    transition: color .2s ease-out;
    
    &:hover, &:focus {
      color: ${theme.color.darkGray};
    }
  }
`;
