import { basicLight } from 'cm6-theme-basic-light'
import { basicDark } from 'cm6-theme-basic-dark'
import { solarizedDark } from 'cm6-theme-solarized-dark'
import { solarizedLight } from 'cm6-theme-solarized-light'
import { materialDark } from 'cm6-theme-material-dark'
import { nord } from 'cm6-theme-nord'
import { gruvboxLight } from 'cm6-theme-gruvbox-light'
import { gruvboxDark } from 'cm6-theme-gruvbox-dark'
import { oneDark } from '@codemirror/theme-one-dark'

const themes = [
  {
    extension: oneDark,
    name: 'One Dark',
    id: 'one_dark'
  },
  {
    extension: basicLight,
    name: 'Basic Light',
    id: 'basic_light'
  },
  {
    extension: basicDark,
    name: 'Basic Dark',
    id: 'basic_dark'
  },
  {
    extension: solarizedLight,
    name: 'Solarized Light',
    id: 'solarized_light'
  },
  {
    extension: solarizedDark,
    name: 'Solarized Dark',
    id: 'solarized_dark'
  },
  {
    extension: materialDark,
    name: 'Material Dark',
    id: 'material_dark'
  },
  {
    extension: nord,
    name: 'Nord',
    id: 'nord'
  },
  {
    extension: gruvboxLight,
    name: 'Gruvbox Light',
    id: 'gruvbox_light'
  },
  {
    extension: gruvboxDark,
    name: 'Gruvbox Dark',
    id: 'gruvbox_dark'
  }
]

export { themes }

