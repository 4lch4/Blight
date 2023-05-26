#! /usr/bin/env node
import { Voidlight } from '@4lch4/busylight'
import { Commander } from '@4lch4/lt-commander'
import { RawCommands } from './commands/index.js'

const program = Commander.program

const busylight = new Voidlight()

program.version('0.0.1').description('Busylight CLI')

for (const command of RawCommands) program.addCommand(await command(busylight))

program.on('exception', (err) => {
  console.error('Error caught in program:')
  console.error(err)
})

program.parse()
