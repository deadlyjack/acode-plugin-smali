import './mode-smali';

import smaliIcon from './icon.svg';
import plugin from '../plugin.json';

const Url = acode.require('url');
const { addMode, removeMode } = acode.require('aceModes');

class AcodePlugin {
  #style;

  async init(firstTime) {
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

    if (!firstTime) return;

    editorManager.files.forEach(file => {
      // update session mode
      if (Url.extname(file.name) === '.smali') {
        file.session.setMode('ace/mode/smali');
      }
    });
  }

  async destroy() {
    this.#style.remove();
    removeMode('smali');

    editorManager.files.forEach(file => {
      // update session mode
      if (Url.extname(file.name) === '.smali') {
        file.session.setMode('ace/mode/text');
      }
    });
  }

}

if (window.acode) {
  const acodePlugin = new AcodePlugin();
  acode.setPluginInit(plugin.id, (baseUrl, $page, options) => {
    acodePlugin.init(options.firstInit);
  });
  acode.setPluginUnmount(plugin.id, () => {
    acodePlugin.destroy();
  });
}