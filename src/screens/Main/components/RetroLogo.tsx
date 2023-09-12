import React from "react";
import "@babylonjs/loaders/glTF";
import { FreeCamera, Vector3, HemisphericLight, SceneLoader } from "@babylonjs/core";
import BabylonScene from "../../../sharedComponents/BabylonScene/BabyonScene";

const onSceneReady = (scene: any) => {
  // This creates and positions a free camera (non-mesh)
  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  SceneLoader.ImportMesh("", "", "../../../assets/exports/M64.glb", scene, function (meshes) {
    var mesh = meshes[0];
    mesh.id = "M64";
    mesh.position.x = 0;
    mesh.position.z = 0;
    mesh.position.y = 0;
  })
};

const onRender = (scene: any) => {

};

interface IRetroLogo { }

const RetroLogo: React.FC<IRetroLogo> = () => {
  return (<div>
    <BabylonScene antialias onSceneReady={onSceneReady} onRender={onRender} id="retro-logo-canvas" />
  </div>
  );
}

export default RetroLogo;