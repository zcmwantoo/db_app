import { createGlobalStyle } from 'styled-components'
export const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'iconfont';  /* project id 1293152 */
    src: url('//at.alicdn.com/t/font_1293152_z8vtwpxuem.eot');
    src: url('//at.alicdn.com/t/font_1293152_z8vtwpxuem.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_1293152_z8vtwpxuem.woff2') format('woff2'),
    url('//at.alicdn.com/t/font_1293152_z8vtwpxuem.woff') format('woff'),
    url('//at.alicdn.com/t/font_1293152_z8vtwpxuem.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_1293152_z8vtwpxuem.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`


