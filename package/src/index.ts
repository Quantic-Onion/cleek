import { App, Plugin } from 'vue';
// vue components
import * as components from './components/index.js';

// install function executed by Vue.use()
const install: Exclude<Plugin['install'], undefined> = function installCleek(app: App, options: any) {
  console.log('arranco paquete', options);
  // vue components
  Object.entries(components).forEach(([componentName, component]) => {

    app.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components/index.js';