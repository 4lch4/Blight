import AlertCommand from './AlertCommand.js'
import BlinkCommand from './BlinkCommand.js'
import FlashCommand from './FlashCommand.js'
import JingleCommand from './JingleCommand.js'
import OffCommand from './OffCommand.js'
import OnCommand from './OnCommand.js'
import PulseCommand from './PulseCommand.js'

export const RawCommands = [
  AlertCommand,
  BlinkCommand,
  FlashCommand,
  JingleCommand,
  OnCommand,
  OffCommand,
  PulseCommand,
]

export * from './Shared.js'
