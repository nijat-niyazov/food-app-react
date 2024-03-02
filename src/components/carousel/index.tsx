import { EmblaOptionsType } from "embla-carousel";
import React, { Fragment } from "react";
import "../css/base.css";
import "../css/embla.css";
import "../css/sandbox.css";
import EmblaCarousel from "./EmblaCarousel";
import Footer from "./Footer";
import Header from "./Header";

const OPTIONS: EmblaOptionsType = { dragFree: true };
const SLIDE_COUNT = 16;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Carousel: React.FC = () => (
  <Fragment>
    <Header />
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    <Footer />
  </Fragment>
);

export default Carousel;
