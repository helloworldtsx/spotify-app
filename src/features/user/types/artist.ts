import { ExternalUrls, Image, Types } from './index'

type Followers = {
   total: number
}

export type RawArtist = {
   id: string
   name: string
   type: Types.Artist
   href: string
   uri: string
   external_urls: ExternalUrls
}

export type Artist = RawArtist & {
   followers: Followers
   genres: string[]
   href: string
   images: Image[]
   popularity: number
}
