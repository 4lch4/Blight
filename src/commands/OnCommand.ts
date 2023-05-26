import { Voidlight, ColorNames } from '@4lch4/busylight'
import { Commander } from '@4lch4/lt-commander'
import { ColorArgument } from './Shared.js'

export async function build(busylight: Voidlight) {
  return new Commander.Command('on')
    .description('Turns on the Busylight and sets it to a color.')
    .addArgument(ColorArgument)
    .action(async (color: ColorNames) => busylight.on(color))
    // .action(async (color: ColorNames) => {
    //   try {
    //     await busylight.on(color)
    //   } catch (error: any) {
    //     console.error(error?.issues || error)
    //   }
    // })
}

export default build
