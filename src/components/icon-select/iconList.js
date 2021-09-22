import iconfontJSon from '@/assets/iconfont-icon/iconfont.json'
let iconfront = iconfontJSon.glyphs.map(item => 'icon-' + item.font_class)
let churuIcon = iconfontJSon.churu.map(item => 'icon-' + item.font_class)
let iconfront2 = iconfontJSon.tongyonger.map(item => 'icon-' + item.font_class)
export default [
  {
    title: '通用',
    icon: iconfront
  },
  {
    title: '通用二',
    icon: iconfront2
  },
  {
    title: '出入境',
    icon: churuIcon
  },
]
