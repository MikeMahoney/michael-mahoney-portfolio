import HollyArtMain from '../images/HollyArtMain.PNG';
import HollyArtMainDetail from '../images/HollyArtMainDetail.PNG';
import HollyArtMobile from '../images/HollyArtMobile.PNG';
import TownshipStreet from '../images/TownshipStreet.PNG';
import TownshipGarden from '../images/TownshipGarden.png';
import TownshipClock from '../images/TownshipClock.png';

export const Blogs = [
  {
    year: 2022,
    blogs: [
      {
        title: "TOWNSHIP PROJECT",
        description: "My first attempt at creating a Unity game from scratch. It's a first-person puzzle game inspired by Myst and The Witness. My hope is to get it on the Steam store by the end of 2022.",
        images: [TownshipStreet, TownshipClock, TownshipGarden ]
      }
    ]
  },
  {
    year: 2021,
    blogs: [
      {
        title: "HOLLY WALSH PORTFOLIO SITE",
        description: "I site I created for the artist Holly Walsh. Holly is an Irish landscape artist based in Edinburgh, Scotland.",
        images: [HollyArtMain, HollyArtMainDetail, HollyArtMobile]
      }
    ]
  }
];