'use client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { FC } from 'react';
import { CarPhoto } from '../types/types';

type CarCarouselProps = {
  imageSet: CarPhoto[];
};

const CarCarousel: FC<CarCarouselProps> = ({ imageSet }) => {
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
    >
      {imageSet &&
        imageSet.map((img) => {
          return (
            <div key={img._id}>
              <Image
                src={img.url}
                alt={''}
                width={800}
                height={400}
                layout='responsive'
                priority
              />
            </div>
          );
        })}
    </Carousel>
  );
};

export default CarCarousel;
