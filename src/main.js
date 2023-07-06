import './mode-smali';

import smaliIcon from './icon.svg';
import plugin from '../plugin.json';

const { addMode, removeMode } = acode.require('aceModes');

class AcodePlugin {
  #style;
  #mode;
  async init() {
    this.#style = <style
      textContent={
        `.file_type_smali::before{
          display: inline-block;
          content: '';
          background-image: url(${smaliIcon});
          background-size: contain;
          background-repeat: no-repeat;
          height: 1em;
          width: 1em;
        }`
      }
    ></style>


    addMode('smali', 'smali', 'Smali');
    document.head.append(this.#style);
  }

  async destroy() {
    this.#style.remove();
    removeMode('smali');
  }

}

if (window.acode) {
  const acodePlugin = new AcodePlugin();
  acode.setPluginInit(plugin.id, () => {
    acodePlugin.init();
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}