export const menuItems = [
  {
    subItems: [
      {
        subItems: [
          { path: 'Mens-Wedding-Suits', title: "Men's Wedding Suits" },
          { path: 'Mens-Wedding-Tuxedos', title: "Men's Wedding Tuxedos" },
          { path: 'Female-Wedding-Suits', title: "Women's Wedding Suits" },
          { path: 'Female-Wedding-Tuxedos', title: "Women's Wedding Tuxedos" },
          { path: 'Prom-And-Homecoming', title: 'Prom & Homecoming' },
        ],
        title: 'Occasions',
      },
      {
        subItems: [
          { path: 'Mens-Suits-And-Tuxedos', title: "Men's Suits & Tuxedos" },
          { path: 'Mens-Suits', title: "Men's Suits" },
          { path: 'Mens-Tuxedos', title: "Men's Tuxedos" },
          { path: 'Female-Suits-And-Tuxedos', title: "Women's Suits & Tuxedos" },
          { path: 'Female-Suits', title: "Women's Suits" },
          { path: 'Female-And-Tuxedos', title: "Women's Tuxedos" },
          { path: 'Kids-And-Toddlers', title: 'Kids & Toddlers' },
        ],
        title: 'Suit & Tuxedos',
      },
      {
        subItems: [
          { path: 'Mens-Jackets', title: "Men's Jackets" },
          { path: 'Mens-Pants', title: "Men's Pants" },
          { path: 'Female-Jackets', title: "Women's Jackets" },
          { path: 'Female-Pants', title: "Women's Pants" },
          { path: 'Unisex-Jackets', title: 'Unisex Jackets' },
        ],
        title: 'Separates',
      },
      {
        subItems: [
          { path: 'Ties-And-Tie', title: 'Ties & Tie' },
          { path: 'Suit-Vests', title: 'Suit Vests' },
          { path: 'Dress-Shoes', title: 'Dress Shoes' },
          { path: 'Suspenders', title: 'Suspenders' },
          { path: 'Socks', title: 'Socks' },
        ],
        title: 'Accessories',
      },
      {
        subItems: [
          { path: 'Half-Day-Garment-Bag', title: 'Half Day Garment Bag' },
          { path: 'Whiskey', title: 'Whiskey' },
          { path: 'Hand-Flasks', title: 'Hand Flasks' },
          { path: 'Watches', title: 'Watches' },
          { path: 'Leather-Wallets', title: 'Leather Wallets' },
        ],
        title: 'Gifts & Extras',
      },
    ],
    title: 'Shop',
  },
  {
    subItems: [
      { title: 'How it Works' },
      { title: 'Book an appointment' },
      { title: 'Fabric Swatches' },
      { title: 'Register a Group' },
    ],
    title: 'Get Started',
  },
  {
    subItems: [
      { title: 'Suit a group' },
      { title: 'Fabric Swatches' },
      { title: 'Book an appointment' },
    ],
    title: 'Weddings & Events',
  },
  {
    subItems: [],
    title: 'Fit Guide',
  },
  {
    subItems: [
      { title: 'Contact Us' },
      { title: 'Returns & Exchanges' },
      { title: 'How-To Page' },
      { title: 'Corporate Services' },
      { title: 'About Us' },
      { title: 'Help Center' },
    ],
    title: 'Resources & Help',
  },
] as {
  subItems: { subItems?: { path?: string; title: string }[]; title: string }[]
  title: string
}[]
