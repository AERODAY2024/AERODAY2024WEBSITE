import { aeroday, prevEditionBg } from "../assets/images";

const prevEditions = [
  {
    year: 2021,
    image: prevEditionBg.edition2021,
  },
  {
    year: 2020,
    image: prevEditionBg.edition2020,
  },
  {
    year: 2019,
    image: prevEditionBg.edition2019,
  },
  {
    year: 2018,
    image: prevEditionBg.edition2018,
  },
  {
    year: 2017,
    image: prevEditionBg.edition2017,
  },
];

const prevEditionImages = {
  2021: [aeroday, aeroday, aeroday, aeroday],
  2020: [aeroday, aeroday, aeroday, aeroday, aeroday, aeroday],
  2019: [aeroday, aeroday, aeroday, aeroday, aeroday],
  2018: [aeroday, aeroday, aeroday, aeroday, aeroday, aeroday],
  2017: [aeroday, aeroday, aeroday],
};

export { prevEditionImages, prevEditions };
