import { Component, Plugin } from 'vue'
import { ERow, ECol, useBreakpoint } from './components/Grid'
import { ELayout, EAside, EMain, EFooter, EHeader } from './components/Layout'
import { EButton, EButtonGroup } from './components/Button'
import { ELink } from './components/Link'
import { EPopper } from './components/Popper'
import { ETooltip } from './components/Tooltip'
import { EPopover } from './components/Popover'
import { EMenu, ESubMenu, EMenuItem, EMenuItemGroup } from './components/Menu'
import { EBreadcrumb, EBreadcrumbItem } from './components/Breadcrumb'
import { EAlert } from './components/Alert'
import { EPagination } from './components/Pagination'
import './styles/index.scss'

export {
  ERow,
  ECol,
  ELayout,
  EAside,
  EMain,
  EHeader,
  EFooter,
  EButton,
  EButtonGroup,
  ELink,
  EPopover,
  EBreadcrumb,
  EBreadcrumbItem,
  EAlert,
  EPagination,
  useBreakpoint
}

export const elenext: Plugin = {
  install(app) {
    const useComponent = (component: Component) => {
      if (component.name) {
        app.component(component.name, component)
      } else {
        throw 'component need name'
      }
    }

    useComponent(ERow)
    useComponent(ECol)
    useComponent(EMenu)
    useComponent(ESubMenu)
    useComponent(EMenuItem)
    useComponent(EMenuItemGroup)

    useComponent(ELayout)
    useComponent(EAside)
    useComponent(EMain)
    useComponent(EHeader)
    useComponent(EFooter)

    useComponent(EButton)
    useComponent(EButtonGroup)
    useComponent(ELink)
    // useComponeEnt(Icon)
    useComponent(EPopper)
    useComponent(ETooltip)
    useComponent(EPopover)

    useComponent(EBreadcrumb)
    useComponent(EBreadcrumbItem)

    useComponent(EAlert)
    useComponent(EPagination)
  }
}
