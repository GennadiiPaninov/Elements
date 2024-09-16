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
  [key in PathKeys]: {
    description: string
    products: { cost: string; image: string; title: string }[]
  }
}
export const categoty: PathsObject = {
  'Dress-Shoes': { description: '', products: [] },
  'Female-And-Tuxedos': { description: '', products: [] },
  'Female-Jackets': { description: '', products: [] },
  'Female-Pants': { description: '', products: [] },
  'Female-Suits': { description: '', products: [] },
  'Female-Suits-And-Tuxedos': { description: '', products: [] },
  'Female-Wedding-Suits': { description: '', products: [] },
  'Female-Wedding-Tuxedos': { description: '', products: [] },
  'Half-Day-Garment-Bag': { description: '', products: [] },
  'Hand-Flasks': { description: '', products: [] },
  'Kids-And-Toddlers': { description: '', products: [] },
  'Leather-Wallets': { description: '', products: [] },
  'Mens-Jackets': { description: '', products: [] },
  'Mens-Pants': { description: '', products: [] },
  'Mens-Suits': { description: '', products: [] },
  'Mens-Suits-And-Tuxedos': { description: '', products: [] },
  'Mens-Tuxedos': { description: '', products: [] },
  'Mens-Wedding-Suits': {
    description:
      "Get ready for your big day with our stylish wedding suits for men. With eleven color options, two fit types, four lengths for all heights, and a vast size range, you, your groomsmen or wedding party, and your guests will be wedding-ready in a suit that's affordable, high-quality, and polished.",
    products: [
      {
        cost: '199',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FPincSuit.jpg?alt=media&token=ec8503bc-4f21-45c8-8d2e-79a69d2c974d',
        title: "Men's Brilliant Pink Suit",
      },
      {
        cost: '212',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FBlackSuit.jpg?alt=media&token=4ad8896f-5192-40a1-b847-10a9f662ea12',
        title: "Men's Brilliant Black Suit",
      },
      {
        cost: '183',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FwhiteSuit.jpg?alt=media&token=958ac50f-6d55-4fd5-9e8b-62a64fd76fe1',
        title: "Men's Brilliant White Suit",
      },
      {
        cost: '215',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FblueSuit.jpg?alt=media&token=03b5281d-67ca-4d4d-9412-910482686cd2',
        title: "Men's Brilliant Blue Suit",
      },
      {
        cost: '215',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FgreySuit.jpg?alt=media&token=e8a6963c-3365-4585-91df-771d33c8ed1d',
        title: "Men's Brilliant Gray Suit",
      },
    ],
  },
  'Mens-Wedding-Tuxedos': {
    description:
      "Whether you're a groomsman, wedding party member, guest, marrier, or the groom himself, look your best with a men’s wedding tuxedo from SuitShop. Our always-timeless and perfectly elegant tuxedos–complete with all the elevated details, most comfortable fabric, and perfect colors–make for a foolproof way to look and feel your best at any ceremony or reception. With a wide range of sizes, fit types, and lengths along with a selection of styles to choose from, you’re sure to find a wedding tux that’s the best match for your style.",
    products: [
      {
        cost: '199',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FPincSuit.jpg?alt=media&token=ec8503bc-4f21-45c8-8d2e-79a69d2c974d',
        title: "Men's Brilliant Pink Tuxedo",
      },
      {
        cost: '212',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FBlackSuit.jpg?alt=media&token=4ad8896f-5192-40a1-b847-10a9f662ea12',
        title: "Men's Brilliant Black Tuxedo",
      },
      {
        cost: '183',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FwhiteSuit.jpg?alt=media&token=958ac50f-6d55-4fd5-9e8b-62a64fd76fe1',
        title: "Men's Brilliant White Tuxedo",
      },
      {
        cost: '215',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FblueSuit.jpg?alt=media&token=03b5281d-67ca-4d4d-9412-910482686cd2',
        title: "Men's Brilliant Blue Tuxedo",
      },
      {
        cost: '215',
        image:
          'https://firebasestorage.googleapis.com/v0/b/products-77698.appspot.com/o/SuitSitePhotos%2FMens%20wedding%20suits%2FgreySuit.jpg?alt=media&token=e8a6963c-3365-4585-91df-771d33c8ed1d',
        title: "Men's Brilliant Gray Tuxedo",
      },
    ],
  },
  'Prom-And-Homecoming': { description: '', products: [] },
  Socks: { description: '', products: [] },
  'Suit-Vests': { description: '', products: [] },
  Suspenders: { description: '', products: [] },
  'Ties-And-Tie': { description: '', products: [] },
  'Unisex-Jackets': { description: '', products: [] },
  Watches: { description: '', products: [] },
  Whiskey: { description: '', products: [] },
}
