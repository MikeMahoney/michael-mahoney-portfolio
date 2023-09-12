import { useEffect, useRef } from "react";
import { Engine, EngineOptions, Scene } from "@babylonjs/core";

interface IBabylonScene {
  antialias?: boolean;
  engineOptions?: EngineOptions;
  adaptToDeviceRatio?: any;
  sceneOptions?: Object;
  onRender: Function;
  onSceneReady: Function;
  id: string;
}

const BabylonScene: React.FC<IBabylonScene> = ({
  antialias,
  engineOptions,
  adaptToDeviceRatio,
  sceneOptions,
  onRender,
  onSceneReady,
  id,
  ...rest
}) => {
  const reactCanvas = useRef(null);

  // set up basic engine and scene
  useEffect(() => {
    const { current: canvas } = reactCanvas;

    if (!canvas) return;

    const engine = new Engine(canvas, antialias, engineOptions, adaptToDeviceRatio);
    const scene = new Scene(engine, sceneOptions);
    if (scene.isReady()) {
      onSceneReady(scene);
    } else {
      scene.onReadyObservable.addOnce((scene) => onSceneReady(scene));
    }

    engine.runRenderLoop(() => {
      if (typeof onRender === "function") onRender(scene);
      scene.render();
    });

    const resize = () => {
      scene.getEngine().resize();
    };

    if (window) {
      window.addEventListener("resize", resize);
    }

    return () => {
      scene.getEngine().dispose();

      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, [antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady]);

  return <canvas ref={reactCanvas} {...rest} />;
};

export default BabylonScene;