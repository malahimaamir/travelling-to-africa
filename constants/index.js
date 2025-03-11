// NAVIGATION
var NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'discover', label: 'Pricing' },
  { href: '/', key: 'contacts', label: 'Contact' }
];

// FOOTER SECTION
var FOOTER_LINKS = [
  {
      title: 'Learn More',
      links: [
          'About Hilink',
          'Press Releases',
          'Environment',
          'Jobs',
          'Privacy Policy',
          'Contact Us'
      ]
  },
  {
      title: 'Our Community',
      links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill']
  }
];

var FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'hilink@akinthil.com' }
  ]
};

var SOCIALS = {
  title: 'Social',
  links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg'
  ]
};

// If you need to access these variables in another file, you can use `module.exports`
module.exports = { NAV_LINKS, FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS };
