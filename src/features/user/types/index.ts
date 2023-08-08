export * from './artist'
export * from './track'
export * from './user'

export enum Types {
   Artist = 'artist',
   Track = 'track',
}

export type ExternalUrls = {
   spotify: string
}

export type Image = {
   height: number
   url: string
   width: number
}
