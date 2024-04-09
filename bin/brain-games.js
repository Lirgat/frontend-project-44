#!/usr/bin/env node
import { name } from '../src/cli.js'
import { greetings } from '../src/cli.js';

console.log(greetings());

const UserName = name();

console.log(`Hello, ${UserName}!`)