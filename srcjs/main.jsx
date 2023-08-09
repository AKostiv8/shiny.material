import 'regenerator-runtime/runtime';
import { reactWidget } from 'reactR';
import initSlider from './slider.js';
import initToggl from './toggl_btn.js';
import initTogglGroup from './toggl_btn_group.js';
import ModalWindow from './modal_window.js';

initSlider();
initToggl();
initTogglGroup();

// Widgets
reactWidget('modal_window', 'output', {
  ModalWindowTag: ModalWindow
});
