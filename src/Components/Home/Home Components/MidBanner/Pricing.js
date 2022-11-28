import React from "react";

const Pricing = () => {
  return (
    <div className="my-9">
      <div className="text-center text-5xl font-serif">
        <h1>Learn Unlimited with Scholarholic+</h1>
      </div>
      <div className="md:flex justify-center md:gap-9 my-8">
        <div className="card w-96 glass my-4 hover:bg-primary">
          <div className="card-body">
            <h2 className="card-title">Scholorholic Hero</h2>
            <p>Learn your fullest with Scholarholic Hero Perks:</p>
            <ul className="list-inside list-disc">
                <li>No Ads</li>
                <li>Unlimited Class</li>
                <li>24 hours Student Support</li>
            </ul>
            <p className="text-neutral">Available monthly for only   <span className="text-secondary text-3xl">$2.99</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary hover:btn-neutral">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass my-4 bg-primary">
          <div className="card-body">
            <h2 className="card-title">Scholarholic Super Hero</h2>
            <p>Learn your fullest with Scholarholic Super Hero Perks:</p>
            <ul className="list-inside list-disc">
                <li>No Ads</li>
                <li>Unlimited Class</li>
                <li>24 hours Student Support</li>
                <li>First 10 certification Free</li>
            </ul>
            <p className="text-neutral">Available Yearly for only   <span className="text-secondary text-3xl">$299</span></p>
            <p className="text-warning">**Most Popular Bundle**</p>
            <div className="card-actions justify-end">
              <button className="btn btn-neutral hover:btn-primary">Learn now!</button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass my-4 hover:bg-primary">
          <div className="card-body">
            <h2 className="card-title">Scholarholic Legend</h2>
            <p>Learn your fullest with Scholarholic Legend Perks:</p>
            <ul className="list-inside list-disc">
                <li>No Ads</li>
                <li>Unlimited Class</li>
                <li>24 hours Student Support</li>
                <li>All the certification Exam is free</li>
                <li>Learn as you go</li>
            </ul>
            <p className="text-neutral">Available for Lifetime at only   <span className="text-secondary text-3xl">$2999</span></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary hover:btn-neutral">Learn now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
