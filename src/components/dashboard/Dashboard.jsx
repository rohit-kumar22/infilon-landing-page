import React from "react";
import "../../styles/Dashboard.css";
import Button from "../../common/Button";
import Flying_fish from "../../assets/Flying_fish.jpg";
import Accordion from "../../common/Accordion";
import { featured_cards } from "../../assets/json/featured";
import { stories } from "../../assets/json/story";

const Dashboard = () => {
  const handleGetStarted = () => {};
  return (
    <div className="stories-container">
      <div className="explore-fly-fishing-section">
        <div>
          <p className="explore-fly-fishing-heading">
            Central Texas <br /> Fly Fishing
          </p>
          <p className="explore-fly-fishing-content">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <div className="get-started-button">
            <Button
              text="Get Started"
              variant="primary"
              size="medium"
              onClick={handleGetStarted}
            />
          </div>
        </div>
        <img className="flying-fish-image" src={Flying_fish} alt="fishing" />
      </div>
      {/* Featured Section */}
      <div className="featured-section">
        <p className="featured-heading">Featured Options</p>
        {featured_cards.map((card) => (
          <Accordion title={card.title}>
            <div className="card-container">
              <img
                className="featured-image"
                src={card.link}
                alt={card.image}
              />
              <div className="content-container">
                <p className="featured-content-title">{card.title}</p>
                <p className="featured-content">{card.content}</p>
                <Button
                  text="Learn More"
                  variant="secondary"
                  size="medium"
                  onClick={handleGetStarted}
                />
              </div>
            </div>
          </Accordion>
        ))}
      </div>
      {/* Stories Section */}
      <div className="story-container">
        <p className="featured-heading">Member Stories</p>
        <div className="grid-container">
          {stories.map((story) => (
            <div className="grid-item">
              <div className="story-section">
                <img
                  className="story-image"
                  src={story.link}
                  alt={story.image}
                />
                <div>
                  <p className="story-title">{story.title}</p>
                  <p className="story-content">{story.content}</p>
                  <Button
                    text="Read More"
                    variant="secondary"
                    size="medium"
                    onClick={handleGetStarted}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
