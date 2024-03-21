import { aeroday, prevEditionBg } from "../assets/images";
import {
  images2017,
  images2018,
  images2019,
  images2020,
  images2021,
} from "../assets/images/prevEditions";

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
  2021: images2021,
  2020: images2020,
  2019: images2019,
  2018: images2018,
  2017: images2017,
};

export { prevEditionImages, prevEditions };
