import React from "react";
import BannerCards from "./BannerCards";
import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <div className="spacer-top"></div>
      <section className="hero-section">
        <h1>Welcome to Book Empyrean</h1>
        <p className="md:w-2/8 ml-8 text-left text-xl">
          At Bookempyrean, we believe that books are the gateway to the empyrean
          of imagination, transporting readers to realms uncharted and
          adventures untold. With a vast collection spanning across genres like
          fantasy, history, mystery, romance, and beyond, we strive to provide a
          haven for book enthusiasts worldwide. Whether you're delving into the
          magical landscapes of fantasy worlds, unraveling the mysteries of the
          past through historical accounts, or embarking on heartwarming
          journeys of love and friendship, our curated selection promises to
          ignite your imagination and satisfy your thirst for literary
          exploration. We invite you to lose yourself in the pages of our books
          and embark on unforgettable literary odysseys.
        </p>
      </section>
      <section className="banner-section">
        <h2>Explore Our Collection</h2>
        <BannerCards />
      </section>
      <section className="mission-section">
        <h2 className="ml-6">Our Mission</h2>
        <p className="md:w-2/8 ml-8 text-left text-xl">
          <p className="mt-4 mb-2">
            Bookempyrean was founded by a diverse group of passionate readers,
            each driven by an unyielding love for the written word and a shared
            vision to create an unparalleled literary haven. United by our
            collective passion for storytelling, we embarked on a journey to
            craft a space where bibliophiles of all ages and backgrounds could
            converge to explore the boundless realms of literature.
          </p>
          <p className="mb-2">
            <span className=" text-2xl font-semibold text-green-900 italic">
              Our mission?
            </span>{" "}
            To ignite the flames of imagination and spark curiosity in the
            hearts of readers worldwide. With an unwavering dedication to
            quality and an unwavering commitment to excellence, we meticulously
            curate our collection to ensure that every title we offer is a
            literary gem waiting to be discovered. From timeless classics to
            contemporary masterpieces, our shelves are adorned with works that
            span genres, eras, and cultures. Whether you're drawn to the
            enchanting realms of fantasy, the gripping narratives of historical
            epics, or the poignant tales of human connection, our curated
            selection promises something to captivate every reader.{" "}
          </p>
          <p>
            We take pride in showcasing the voices of both well-known authors
            and emerging talents, celebrating the diversity of perspectives and
            experiences within our literary community. As you peruse our
            shelves, you'll encounter best sellers that have captured the hearts
            of millions, as well as hidden treasures eagerly awaiting their
            moment in the spotlight. Every book we offer is a journey waiting to
            be embarked upon, an adventure waiting to unfold. At Bookempyrean,
            we believe that the magic of storytelling knows no bounds. Whether
            you're seeking solace in the pages of a beloved classic or venturing
            into uncharted literary territory, we invite you to join us on a
            quest for knowledge, inspiration, and discovery. So, grab a cup of
            tea, cozy up with a blanket, and prepare to lose yourself in the
            enchanting world of books. Your next great adventure awaits.
          </p>
        </p>
      </section>
      <section className="testimonials-section">
        <h2 className="md:w-2/8 ml-8 text-left text-4xl font-semibold">
          What Our Customers Say
        </h2>
        <div className=" ml-4 testimonial-grid">
          <div className="mt-4 testimonial">
            <p>
              "Bookempyrean is my go-to destination for all things books. From
              fantasy adventures to gripping historical accounts, they have it
              all. Their commitment to customer satisfaction truly shines
              through, and I couldn't be happier!"
            </p>
            <p>- Emily, Book Club Member</p>
          </div>
          <div className=" mt-4 testimonial">
            <p>
              "As an avid reader, I've explored many online bookstores, but none
              compare to Bookempyrean. The user-friendly interface, vast
              selection, and prompt service make it my top choice every time."
            </p>
            <p>- Michael, Happy Buyer</p>
          </div>
          <div className=" mt-4 testimonial">
            <p>
              "Joining the Bookempyrean Book Club has been one of the best
              decisions I've made. The discussions, recommendations, and sense
              of community are unparalleled. It's more than just a bookstore;
              it's a haven for book lovers."
            </p>
            <p>- Sarah, Book Club Member</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
