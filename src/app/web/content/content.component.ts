import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "lottie-web";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() {
  }

  optionsStarfish: AnimationOptions = {
    renderer: "svg",
    path: "https://assets6.lottiefiles.com/packages/lf20_wchbhjbj.json",
  };

  animationCreated(animationItem: AnimationItem): void {
    this.updateRenderConfig(animationItem);
  }

  animationCreatedTwo(animationItem: AnimationItem): void {
    this.updateRenderConfigTwo(animationItem);
  }

  updateRenderConfig(animationItem: AnimationItem): void {
    animationItem.renderer.renderConfig.height = 150;
    animationItem.renderer.renderConfig.width = 150;
    animationItem.setSpeed(.3);
  }

  updateRenderConfigTwo(animationItem: AnimationItem): void {
    animationItem.renderer.renderConfig.height = 150;
    animationItem.renderer.renderConfig.width = 150;
    animationItem.setSpeed(.6);
  }

  ngOnInit(): void {
  }

}
