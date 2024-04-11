#!/usr/bin/env node
import { name, greetings } from "../src/cli.js";

greetings();

const UserName = name();

console.log(`Hello, ${UserName}!`);
