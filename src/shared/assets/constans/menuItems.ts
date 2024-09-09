export const menuItems = [
  {
    subItems: [
      {
        subItems: [
          { title: "Men's Wedding Suits" },
          { title: "Men's Wedding Tuxedos" },
          { title: "Women's Wedding Suits" },
          { title: "Women's Wedding Tuxedos" },
          { title: 'Prom & Homecoming' },
        ],
        title: 'Occasions',
      },
      {
        subItems: [
          { title: "Men's Suits & Tuxedos" },
          { title: "Men's Suits" },
          { title: "Men's Tuxedos" },
          { title: "Women's Suits & Tuxedos" },
          { title: "Women's Suits" },
          { title: "Women's Tuxedos" },
          { title: 'Kids & Toddlers' },
        ],
        title: 'Suit & Tuxedos',
      },
      {
        subItems: [
          { title: "Men's Jackets" },
          { title: "Men's Pants" },
          { title: "Women's Jackets" },
          { title: "Women's Pants" },
          { title: 'Unisex Jackets' },
        ],
        title: 'Separates',
      },
      {
        subItems: [
          { title: "Men's Jackets" },
          { title: "Men's Pants" },
          { title: "Women's Jackets" },
          { title: "Women's Pants" },
          { title: 'Unisex Jackets' },
        ],
        title: 'Accessories',
      },
      {
        subItems: [
          { title: 'Halfday Garment Bag' },
          { title: 'Whiskey' },
          { title: 'Hand Flasks' },
          { title: 'Watches' },
          { title: 'Leather Wallets' },
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
] as { subItems: { subItems?: { title: string }[]; title: string }[]; title: string }[]
