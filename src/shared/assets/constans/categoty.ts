export type PathKeys =
  | 'Dress-Shoes'
  | 'Female-And-Tuxedos'
  | 'Female-Jackets'
  | 'Female-Pants'
  | 'Female-Suits'
  | 'Female-Suits-And-Tuxedos'
  | 'Female-Wedding-Suits'
  | 'Female-Wedding-Tuxedos'
  | 'Half-Day-Garment-Bag'
  | 'Hand-Flasks'
  | 'Kids-And-Toddlers'
  | 'Leather-Wallets'
  | 'Mens-Jackets'
  | 'Mens-Pants'
  | 'Mens-Suits'
  | 'Mens-Suits-And-Tuxedos'
  | 'Mens-Tuxedos'
  | 'Mens-Wedding-Suits'
  | 'Mens-Wedding-Tuxedos'
  | 'Prom-And-Homecoming'
  | 'Socks'
  | 'Suit-Vests'
  | 'Suspenders'
  | 'Ties-And-Tie'
  | 'Unisex-Jackets'
  | 'Watches'
  | 'Whiskey'

type PathsObject = {
  [key in PathKeys]: any[]
}
export const categoty: PathsObject = {
  'Dress-Shoes': [],
  'Female-And-Tuxedos': [],
  'Female-Jackets': [],
  'Female-Pants': [],
  'Female-Suits': [],
  'Female-Suits-And-Tuxedos': [],
  'Female-Wedding-Suits': [],
  'Female-Wedding-Tuxedos': [],
  'Half-Day-Garment-Bag': [],
  'Hand-Flasks': [],
  'Kids-And-Toddlers': [],
  'Leather-Wallets': [],
  'Mens-Jackets': [],
  'Mens-Pants': [],
  'Mens-Suits': [],
  'Mens-Suits-And-Tuxedos': [],
  'Mens-Tuxedos': [],
  'Mens-Wedding-Suits': [{ cost: '', image: '', title: '' }],
  'Mens-Wedding-Tuxedos': [],
  'Prom-And-Homecoming': [],
  Socks: [],
  'Suit-Vests': [],
  Suspenders: [],
  'Ties-And-Tie': [],
  'Unisex-Jackets': [],
  Watches: [],
  Whiskey: [],
}
