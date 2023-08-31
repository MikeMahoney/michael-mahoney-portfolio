import HollyArtMain from '../images/HollyArtMain.PNG'
import HollyArtMainDetail from '../images/HollyArtMainDetail.PNG'
import HollyArtMobile from '../images/HollyArtMobile.PNG'
import TownshipStreet from '../images/TownshipStreet.PNG'
import TownshipGarden from '../images/TownshipGarden.png'
import TownshipClock from '../images/TownshipClock.png'

export const Blogs = [
  {
    year: 2023,
    blogs: [
      {
        title: 'TOWN-SHIP PROJECT',
        description: [
          'My first attempt at creating a Unity game from scratch.',
          "It's a first-person puzzle game inspired by games like Myst and The Witness.",
          'My hope is to release it for free on itch.io.'
        ],
        images: [TownshipStreet, TownshipClock, TownshipGarden]
      }
    ]
  },
  {
    year: 2022,
    blogs: [
      {
        title: 'HOLLY WALSH PORTFOLIO SITE',
        description: ['I site I created for the artist Holly Walsh.', 'Holly is an Irish landscape artist based in Edinburgh, Scotland.'],
        images: [HollyArtMain, HollyArtMainDetail, HollyArtMobile]
      }
    ]
  }
]
