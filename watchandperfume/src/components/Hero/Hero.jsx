import React, { useState } from "react";
import "./Hero.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const slides = [
  {
    title: "Perfumes",
    description:
      "Perfume is more than a fragrance—it is an unspoken language that lingers in the air, telling stories of elegance, passion, and identity. Each drop is a delicate composition of nature’s most precious essences, where fresh citrus sparkles like morning sunlight, florals bloom with grace, and warm woods embrace like a comforting memory. Subtle spices weave intrigue, while whispers of musk and amber leave a lingering trail that captures hearts long after you’ve passed. It is not just a scent, but an experience—an invisible accessory that defines your mood, enhances your presence, and transforms every moment into something unforgettable.",
    image: "/src/assets/i7.png",
  },
  {
    title: "Men's Perfumes",
    description:
      " A man’s fragrance is more than just a scent—it is a statement of presence, character, and charm. Imagine the deep warmth of cedarwood and sandalwood blending seamlessly with earthy patchouli, leaving a trail of confidence in every step. Fresh aquatic notes mingle with zesty citrus and a hint of mint, evoking the crisp air of an ocean breeze. For evenings, a seductive touch of cardamom, cinnamon, and leather creates an aura of mystery and sophistication. From energetic citrus bursts for daytime adventures to smoky tobacco and rich oud for formal moments, every note is crafted to embody strength, elegance, and timeless masculinity.",
    image: "/src/assets/i2.png",
  },
  {
    title: "Women's Perfumes",
    description:
      "A woman’s perfume is a whisper of elegance, a memory wrapped in fragrance, and a reflection of her soul. A delicate bouquet of rose, jasmine, and peony blooms in harmony, leaving behind a romantic and graceful trail. For those with a playful spirit, sweet notes of ripe peaches, juicy berries, and creamy vanilla dance together in irresistible charm. On warmer days, crisp cucumber, green tea, and lily-of-the-valley create a refreshing and airy embrace, while exotic amber, sandalwood, and soft spices weave an intoxicating evening aura. From powdery iris and violet to warm musk, every drop tells a story of beauty, confidence, and allure.",
    image: "/src/assets/i3.png",
  },
  {
    title: "Watches",
    description:
      "A watch is more than a timekeeper—it is a reflection of personal style, craftsmanship, and precision. Every tick tells a story, blending functionality with elegance. From the glint of polished metal to the intricate movement hidden beneath its case, a watch embodies the art of engineering and design. Smooth, sweeping hands trace the hours over a dial that can be bold and modern or classic and understated. Whether adorned with fine leather straps, durable stainless steel, or contemporary mesh, it becomes a trusted companion for both everyday wear and special occasions. A well-crafted watch is not just worn—it is experienced, carrying with it moments, memories, and a timeless charm that never fades.",
    image: "/src/assets/w4.png",
  },
    {
    title: " Men Watches",
    description:
      "   A men’s watch is a symbol of sophistication, strength, and precision—an accessory that speaks before words are ever exchanged. Crafted with meticulous attention to detail, it combines durability with timeless style. The sturdy stainless steel case, resilient sapphire crystal, and finely engineered movement ensure accuracy and reliability, while the bold dial and refined strap reflect a man’s personal taste. Whether it’s a classic leather band for a formal setting, a rugged chronograph for adventure, or a sleek metal bracelet for everyday wear, a men’s watch is more than a tool—it’s a statement of confidence, discipline, and enduring elegance that stands the test of time.",
    image: "/src/assets/w5.png",
  },
    {
    title: "Women Watches",
    description:
      " A women’s watch is the perfect blend of elegance, grace, and functionality—an accessory that enhances every moment with timeless charm. Delicately crafted with precision, it reflects a balance between beauty and performance. The shimmering dial, adorned with subtle details, catches the light with every movement, while the refined strap—whether in soft leather, polished metal, or delicate mesh—adds a touch of sophistication to any attire. More than a timepiece, it is a piece of jewelry, a style statement, and a symbol of poise. From casual days to formal evenings, a women’s watch gracefully accompanies her through life’s moments, marking time with elegance that never fades.",
    image: "/src/assets/w6.png",
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
   <section className="hero-section py-5">
  <div className="container">
    <div className="position-relative">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? "active d-flex flex-lg-row flex-column align-items-center" : "d-none"}`}
          >
            <div className="col-lg-6 col-12 text-center text-lg-start">
              <h2 className="carousel-title mb-3">{slide.title}</h2>
              <p className="carousel-description mb-4">{slide.description}</p>
              <button className="btn btn-primary hero-btn">Shop Now</button>
            </div>
            <div className="col-lg-6 col-12 text-center">
              <img src={slide.image} alt={slide.title} className="img-fluid hero-img" />
            </div>
          </div>
        ))}
      </div>

      {/* Custom Controls */}
      <button className="carousel-control-prev custom-control" onClick={prevSlide}>
        ❮
      </button>
      <button className="carousel-control-next custom-control" onClick={nextSlide}>
        ❯
      </button>
    </div>
  </div>
</section>

  );
}
