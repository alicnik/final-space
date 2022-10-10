import type { Character, Episode, Location, Quote } from '@prisma/client';

type Serialize<T extends Record<string, any>> = {
	[Key in keyof T]: T[Key] extends Date ? string : T[Key];
};

export type SerializedCharacter = Serialize<Character>;
export type SerializedEpisode = Serialize<Episode>;
export type SerializedLocation = Serialize<Location>;
export type SerializedQuote = Serialize<Quote>;
