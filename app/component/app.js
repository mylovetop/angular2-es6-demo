/**
 * Created by Administrator on 2015/12/28.
 */
import {Component, View, Attribute} from 'angular2/core';
import {RouteConfig, RouteParams, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
  selector: 'app'
})
@View({
  directives: [ROUTER_DIRECTIVES],
  templateUrl:'./view/app.html'
})
export class App{

}