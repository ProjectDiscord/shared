import { SlashCommandBuilder, ChatInputCommandInteraction, ClientEvents } from "discord.js";

export interface EventInterface<K extends keyof ClientEvents = keyof ClientEvents> {
  name: K;
  options?: {
    rest?: boolean;
    once?: boolean;
  };
  execute: (...args: ClientEvents[K]) => Promise<void> | void;
}

export interface CommandInterface {
  cooldown: number;
  isDeveloperOnly: boolean;
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void> | void;
}
