import { Voidlight } from '@4lch4/busylight'
import { Commander } from '@4lch4/lt-commander'

export async function build(busylight: Voidlight) {
  return new Commander.Command('off')
    .description('Turns the Busylight off.')
    .action(() => busylight.off())
}

export default build
