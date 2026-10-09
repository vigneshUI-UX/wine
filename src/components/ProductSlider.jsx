import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductSlider({ products, onOpenModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const currentSlide = containerRef.current?.querySelector('.swiper-slide-active');
    if (!currentSlide) return;

    const bottle = currentSlide.querySelector('.bottle-img');
    const title = currentSlide.querySelector('.bg-title');
    const tagline = currentSlide.querySelector('.slide-tagline');
    const decors = currentSlide.querySelectorAll('.floating-decor');

    const ctx = gsap.context(() => {
      // Hero background text slides in from left to right
      gsap.fromTo(
        title,
        { x: -350, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.85, ease: 'power3.out' }
      );

      // Bottle vertical reveal
      gsap.fromTo(
        bottle,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.1 }
      );

      // Top tagline drop
      gsap.fromTo(
        tagline,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', delay: 0.2 }
      );

      // Fruits slide in from RIGHT to LEFT on slide change
      gsap.fromTo(
        decors,
        { x: 200, opacity: 0, scale: 0.8, rotation: 20 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.1,
          onComplete: () => {
            // Start continuous floating animation after slide-in finishes
            decors.forEach((decor, idx) => {
              gsap.to(decor, {
                y: idx % 2 === 0 ? '-=12' : '+=12',
                rotation: idx % 2 === 0 ? '+=8' : '-=8',
                duration: 2.2 + idx * 0.3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.easeInOut'
              });
            });
          }
        }
      );
    }, currentSlide);

    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="slider-wrapper"
      style={{ backgroundColor: products[activeIndex].bgColor }}
    >
      <button className="nav-btn prev nav-prev-btn" aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className="nav-btn next nav-next-btn" aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        speed={700}
        navigation={{
          prevEl: '.nav-prev-btn',
          nextEl: '.nav-next-btn'
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-content">
              {/* Top Tagline */}
              <span className="slide-tagline">{item.tagline}</span>

              {/* Center Stage: Hero Text + Bottle */}
              <div className="center-stage">
                <h1 className="bg-title">{item.title}</h1>
                <img src={item.bottleImg} alt={item.title} className="bottle-img" />
              </div>

              {/* Floating Fruit Elements */}
              <img src={item.decorImg} alt="fruit decor top left" className="floating-decor decor-tl" />
              <img src={item.decorImg} alt="fruit decor top right" className="floating-decor decor-tr" />
              <img src={item.decorImg} alt="fruit decor bottom left" className="floating-decor decor-bl" />
              <img src={item.decorImg} alt="fruit decor bottom right" className="floating-decor decor-br" />

              {/* Bottom Glass Pill Button */}
              <button className="explore-btn" onClick={() => onOpenModal(item)}>
                Explore Tasting Notes & Specs
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}