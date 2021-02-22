import { useCallback, useEffect, useState } from 'react';
import { Variant } from 'framer-motion/types/types';
import { AnimationControls, useAnimation } from 'framer-motion';

type tCallback = () => void;
type tScenarios = (string | Variant | number | tCallback)[];
interface IScenarioOptions {
  name: string;
  animate: Variant;
}

const useAnimateScenarios = (
  options: IScenarioOptions[]
): [
  AnimationControls,
  (scenarios: tScenarios, callback?: tCallback) => Promise<void>
] => {
  const [scenariosOptions, setScenariosOptions] = useState<IScenarioOptions[]>([]);
  const controls = useAnimation();

  const findScenario = useCallback(
    (name: string): Variant => {
      const scenario = scenariosOptions?.filter((scenario) => name === scenario.name);

      return scenario && scenario.length > 0 ? scenario[0].animate : {};
    },
    [scenariosOptions]
  );

  const animate = useCallback(
    /**
     * @param scenarios A list of animation scenarios
     * @param callback A callback function has to be called when all animated sceneries are played
     */
    async (scenarios: tScenarios, callback?: () => void) => {
      if (scenariosOptions) {
        for await (const scenario of scenarios) {
          if (typeof scenario === 'string') {
            await controls.start(findScenario(scenario as string));
          } else if (typeof scenario === 'number') {
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve(scenario);
              }, scenario * 1000);
            });
          } else if ({}.toString.call(scenario) === '[object Function]') {
            await (scenario as tCallback)();
          } else {
            await controls.start(scenario as Variant);
          }
        }

        callback?.();
      }
    },
    [controls, findScenario, scenariosOptions]
  );

  useEffect(() => {
    setScenariosOptions(options);
  }, [options]);

  return [controls, animate];
};

export default useAnimateScenarios;
