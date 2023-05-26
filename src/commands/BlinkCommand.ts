import { Voidlight, ColorNames } from '@4lch4/busylight'
import { Commander } from '@4lch4/lt-commander'
import { ColorArgument } from './Shared.js'

export async function build(busylight: Voidlight) {
  return new Commander.Command('blink')
    .description('Blinks the Busylight a given color.')
    .addArgument(ColorArgument)
    .action((color: ColorNames) => busylight.blink(color))
}

export default build
