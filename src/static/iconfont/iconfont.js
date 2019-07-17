import {createGlobalStyle} from 'styled-components'
export const GlobalFont = createGlobalStyle`
  @font-face {font-family: "iconfont";
    src: url('./iconfont.eot?t=1563023582676'); /* IE9 */
    src: url('./iconfont.eot?t=1563023582676#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1563023582676') format('woff'),
    url('./iconfont.ttf?t=1563023582676') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1563023582676#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 18px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`


