import { ExternalUrls, Image, Types } from './index'
import { RawArtist } from './artist'

type Album = {
   album_type: string
   artists: RawArtist[]
   available_markets: string[]
   external_urls: ExternalUrls
   href: string
   id: string
   images: Image[]
   name: string
   release_date_precision: string
   release_date: string
   total_tracks: number
   type: Types.Track
   uri: string
}

type ExternalIDS = {
   isrc: string
}

export type Track = {
   album: Album
   artists: RawArtist[]
   available_markets: string[]
   disc_number: number
   duration_ms: number
   explicit: boolean
   external_ids: ExternalIDS
   external_urls: ExternalUrls
   href: string
   id: string
   is_local: boolean
   name: string
   popularity: number
   preview_url: string
   track_number: number
   type: string
   uri: string
}
