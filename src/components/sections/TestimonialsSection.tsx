import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Star } from 'lucide-react';
import AnimatedElement from '../ui/AnimatedElement';
import Section from '../ui/Section';
import { getTestimonials } from '../../utils/localStorage';
import { initialTestimonials } from '../../data/initialData';

const TestimonialsSection: React.FC = () => {
  const testimonials = getTestimonials().length > 0 ? getTestimonials() : initialTestimonials;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <Section
      id="testimonials"
      title="O que nossos clientes dizem"
      subtitle="Conheça as experiências de alguns dos nossos clientes que confiaram em nosso trabalho."
      dark
      centerTitle
    >
      <div className="max-w-4xl mx-auto">
        <AnimatedElement animation="fadeIn">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-dark-700 p-8 rounded-lg">
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <blockquote className="text-center mb-8">
                    <p className="text-lg text-gray-300 italic">"{testimonial.text}"</p>
                  </blockquote>
                  <div className="flex flex-col items-center">
                    {testimonial.image && (
                      <div className="w-16 h-16 mb-4 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="text-center">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </AnimatedElement>
      </div>
    </Section>
  );
};

export default TestimonialsSection;