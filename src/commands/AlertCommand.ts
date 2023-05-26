import { ColorNames, Voidlight } from '@4lch4/busylight'
import { Commander } from '@4lch4/lt-commander'
import { ColorOption, SoundOption, VolumeOption } from './Shared.js'

export async function build(busylight: Voidlight) {
  return new Commander.Command('alert')
    .description('Plays a sound and flashes the Busylight a given color.')
    .addOption(ColorOption)
    .addOption(SoundOption)
    .addOption(VolumeOption)
    .action(() => {
      const opts = Commander.program.opts()

      return busylight.alert({
        color: opts.color as ColorNames,
        sound: opts.sound,
        volume: opts.volume,
      })
    })
}

export default build
