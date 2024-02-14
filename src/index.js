import Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";
import MenuScene from "./scenes/MenuScene";
import PreloadScene from "./scenes/PreloadScene";
import ScoreScene from "./scenes/ScoreScene";
import PauseScene from "./scenes/PauseScene";

const WIDTH = 400;
const HEIGHT = 600;
const BIRD_POSITION = { x: WIDTH / 10, y: HEIGHT / 2 };

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION,
};

const scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];

const initScenes = () => scenes.map((Scene) => new Scene(SHARED_CONFIG));

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  // pixelArt prevents spritesheets to blur and display random borders 
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: {},
  },
  scene: initScenes(),
};

new Phaser.Game(config);
