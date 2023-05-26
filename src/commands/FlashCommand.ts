import { ColorNames, Voidlight } from '@4lch4/busylight'
import { Commander } from '@4lch4/lt-commander'
import { ColorArgument } from './Shared.js'

export async function build(busylight: Voidlight) {
  return new Commander.Command('flash')
    .description('Flashes the Busylight between two colors.')
    .addArgument(ColorArgument)
    .addArgument(ColorArgument)
    .action((colorA: ColorNames, colorB: ColorNames) => busylight.flashColors(colorA, colorB))
}

export default build
