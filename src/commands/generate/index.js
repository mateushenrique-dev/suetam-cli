import { reactFunctional } from './react-functional.js';

const generateTypes = {
  component: reactFunctional,
};

function generate(program) {
  program
    .command("generate")
    .description("Generate a new react component")
    .argument("<type>", "Type of component to generate")
    .argument("<name>", "Name of component")
    .argument("<dir>", "Directory to generate the component")
    .option("-ts, --typescript", "Use typescript for generate the component")
    .option("-s, --styled", "Use styled-components for generate the component")
    .action((type, name, dir, options) => {
      const configs = { type, name, dir };
      if (generateTypes[type]) {
        generateTypes[type](configs, options);
      }
    });
}

export default generate;

