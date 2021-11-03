import { writeFileSync, mkdir, existsSync } from "fs";

export function reactFunctional(configs, options) {
  const { name, dir } = configs;
  const { typescript, styled } = options;

  const template = `
import React from "react"; 

function ${name} () { 
  return ( 
    <div> 

    </div> 
  );  
} 

export { ${name} } 
  `;

  const styledTemplate = `
import styled from "styled-components"

const ${name} = styled.div\`\`

export { ${name} } 
  `;

  if (name && dir) {
    if (!existsSync(`${dir}/${name}`)) {
      return mkdir(`${dir}/${name}`, { recursive: true }, (err) => {
        if (err) {
          return console.log(err);
        }

        if (styled) {
          mkdir(`${dir}/${name}/styles`, { recursive: true }, (err) => {
            if (err) {
              return console.log(err);
            }

            writeFileSync(
              `${dir}/${name}/styles/${name}.${typescript ? "ts" : "js"}`,
              styledTemplate
            );
          });
        }

        writeFileSync(
          `${dir}/${name}/index.${typescript ? "ts" : "js"}`,
          template
        );
      });
    }

    console.log("Component already exists!");
  } else {
    console.log("Forneça um nome e diretório");
  }
}
