#!/usr/bin/env node
import { name } from '../src/cli.js'

console.log('Welcome to the Brain Games!')

const UserName = name();

console.log(`Hello, ${UserName}!`)