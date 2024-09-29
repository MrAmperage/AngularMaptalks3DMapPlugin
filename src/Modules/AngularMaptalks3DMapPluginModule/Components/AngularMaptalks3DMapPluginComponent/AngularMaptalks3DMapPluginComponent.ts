import { Component } from '@angular/core';

/*Основной компонент плагина для отображения 3D поверхности на карте*/
@Component({
  selector: 'AngularMaptalks3DMapPluginComponent',
  templateUrl: './AngularMaptalks3DMapPluginComponent.html',
})
export default class AngularMaptalks3DMapPluginComponent {
  /*
SVG иконка для тултипа.
(Используется в плагине тулбара для карты) 
*/
  Icon: any;
  /*
  Тип Плагина:
  Button: Активируется при нажатии на кнопку и диактивируется при повторном нажатии
  Panel: При нажатии на кнопку появляется панель инструмента
  */
  Type: 'Button' | 'Panel' = 'Button';
}
