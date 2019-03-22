import { getHooks, reduceHooks } from '../utils'

export default {
  afterGetConfig: state => {
    const hooks = getHooks(state.plugins, 'afterGetConfig')
    return reduceHooks(hooks)(state)
  },
  beforePrepareBrowserPlugins: state => {
    const hooks = getHooks(state.plugins, 'beforePrepareBrowserPlugins')
    return reduceHooks(hooks)(state)
  },
  afterPrepareBrowserPlugins: state => {
    const hooks = getHooks(state.plugins, 'afterPrepareBrowserPlugins')
    return reduceHooks(hooks)(state)
  },
  beforePrepareRoutes: state => {
    const hooks = getHooks(state.plugins, 'beforePrepareRoutes')
    return reduceHooks(hooks)(state)
  },
  getRoutes: (routes, state) => {
    const hooks = getHooks(state.plugins, 'getRoutes')
    return reduceHooks(hooks)(routes, state)
  },
  normalizeRoute: state => {
    const hooks = getHooks(state.plugins, 'normalizeRoute')
    return route => reduceHooks(hooks, { sync: true })(route, state)
  },
  afterPrepareRoutes: state => {
    const hooks = getHooks(state.plugins, 'afterPrepareRoutes')
    return reduceHooks(hooks)(state)
  },
  webpack: (config, state) => {
    const hooks = getHooks(state.plugins, 'webpack')
    return reduceHooks(hooks, { sync: true })(config, state)
  },
  afterExport: state => {
    const hooks = getHooks(state.plugins, 'afterExport')
    return reduceHooks(hooks)(state)
  },
  beforeRenderToElement: (Comp, state) => {
    const hooks = getHooks(state.plugins, 'beforeRenderToElement')
    return reduceHooks(hooks)(Comp, state)
  },
  beforeRenderToHtml: (element, state) => {
    const hooks = getHooks(state.plugins, 'beforeRenderToHtml')
    return reduceHooks(hooks)(element, state)
  },
  beforeHtmlToDocument: (html, state) => {
    const hooks = getHooks(state.plugins, 'beforeHtmlToDocument')
    return reduceHooks(hooks)(html, state)
  },
  htmlProps: (props, state) => {
    const hooks = getHooks(state.plugins, 'htmlProps')
    return reduceHooks(hooks)(props, state)
  },
  headElements: (elements, state) => {
    const hooks = getHooks(state.plugins, 'headElements')
    return reduceHooks(hooks)(elements, state)
  },
  beforeHtmlToFile: (html, state) => {
    const hooks = getHooks(state.plugins, 'beforeHtmlToFile')
    return reduceHooks(hooks)(html, state)
  },
}