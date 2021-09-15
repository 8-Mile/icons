import iconfontJSon from '@/assets/iconfront-icon/iconfont.json'
let iconfront = iconfontJSon.glyphs.map(item => 'icon-' + item.font_class)
let churuIcon = iconfontJSon.churu.map(item => 'icon-' + item.font_class)
export default [
  {
    title: '通用',
    icon: iconfront
  },
  {
    title: '出入境',
    icon: churuIcon
  },
]
