import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

export default function About() {
  return (
  <section className="about-us py-5" id="about">
    <div className="container">
        <div class="text-center mb-5">
            <h1 className="about-title">About <span>Time & Essence</span></h1>
            <p className="about-intro mx-auto">
                At <strong>Time & Essence</strong>, we create timeless elegance. Our exquisite <span>watches</span> and captivating <span>perfumes</span> are crafted for those who appreciate luxury, style, and individuality. Every product tells a story—yours.
            </p>
        </div>

        <div className="row text-center">
            <div className="col-md-4 mb-4">
                <div className="about-card">
                    <i className="ri-eye-line about-icon"></i>
                    <h3 className="about-heading">Our Vision</h3>
                    <p>To redefine luxury by offering sophisticated watches and enchanting fragrances that reflect elegance and individuality.</p>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="about-card">
                    <i className="ri-target-line about-icon"></i>
                    <h3 className="about-heading">Our Mission</h3>
                    <p>To deliver premium-quality products that blend precise engineering with luxurious scents, enhancing your lifestyle and confidence.</p>
                </div>
            </div>

            <div className="col-md-4 mb-4">
                <div className="about-card">
                    <i className="ri-star-line about-icon"></i>
                    <h3 className="about-heading">Our Values</h3>
                    <p>Integrity, craftsmanship, and innovation guide us in creating products that stand the test of time and style.</p>
                </div>
            </div>
        </div>

        <div className="our-story mt-5 text-center">
            <h2>Our Story</h2>
            <p className="story-text">
                Time & Essence was born from a passion for elegance. We combine artistry with quality to create watches that mark your moments and perfumes that leave lasting impressions. Every item we craft is a celebration of style, sophistication, and personal expression.
            </p>
            <a href="#watch" className="btn btn-primary mt-3">Explore Products</a>
        </div>
    </div>
</section>
  );
}
