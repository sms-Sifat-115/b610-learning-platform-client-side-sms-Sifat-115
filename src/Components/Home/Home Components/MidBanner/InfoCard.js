import React from "react";
import lady from "./lady_looking_at_computer.png"

const InfoCard = () => {
  return (
    <div className="md:flex text-justify justify-evenly md:p-20 md:m-12 p-4 m-2 bg-base-200 shadow-xl grid gap-9 items-center rounded-lg">
        <div className="text-justify md:pr-12 grid gap-y-4">
            <h1>What is a Professional Certificate?</h1>
            <div>
                <h1>Build the Skills to Get Job Ready</h1>
                <p>Whether you’re looking to start a new career, or change your current one, Professional Certificates on Scholarholic help you become job ready. Learn at your own pace, whenever and wherever it’s most convenient for you. Enroll today and explore a new career path with a 7 day free trial. You can pause your learning or end your subscription at any time.</p>
            </div>
            <div>
                <h1>Hands-On Projects</h1>
                <p>Apply your skills with hands-on projects and build a portfolio that showcases your job readiness to potential employers. You'll need to successfully finish the project(s) to earn your Certificate.</p>
            </div>
            <div>
                <h1>Earn a Career Credential</h1>
                <p>When you complete all of the courses in the program, you'll earn a Certificate to share with your professional network as well as unlock access to career support resources to help you kickstart your new career. Many Professional Certificates have hiring partners that recognize the Professional Certificate credential and others can help prepare you for a certification exam. You can find more information on individual Professional Certificate pages where it applies.</p>
            </div>
        </div>
        <div>
            <img className="md:max-w-3xl skew-y-3 rounded-md" src={lady} alt="" />
        </div>
    </div>
  );
};

export default InfoCard;
