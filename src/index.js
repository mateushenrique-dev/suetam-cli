#!/usr/bin/env node

import { program } from 'commander';
import generate from './commands/generate/index.js';

program.version("1.0");

generate(program);

program.parse(process.argv);