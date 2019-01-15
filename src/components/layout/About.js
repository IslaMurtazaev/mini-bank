import React from "react";

const About = () => {
  return (
    <div className="row">
      <div className="col-md-10 mx-auto jumbotron">
        <h1 className="primary-text text-center">Mini bank</h1>
        <h6 className="secondary-text text-center">
          Is a serverless application where you can create an account for your
          loaners and keep track of their paying back.
        </h6>
        <h6 className="secondary-text text-center mb-4">
          The purpose of this project is purely educational.
        </h6>
        <p>
          We all go to some activities with out friends and occasionaly we pay
          for each other and have hard time figuring out who owes whom and how
          much. There are also situations when you can not remember when have
          you managed to spend all your salary. Sometimes we keep track of our
          spendings, by writing them down in notebook and eventually forgetting
          about it for a month or so.
        </p>
        <p>
          With this app you can easily create an account for your loaner, with
          his/her general infomation, contacts and balance. After you can edit
          accounts and delete them if neccessary, also you can invite others to
          signup and help you to keep track of the loaners if you are using this
          app for a group of people (company, family).
        </p>
        <p>
          This project is open-source, follow this link to
          <a href="https://github.com/IslaMurtazaev/mini-bank">
            my github repo
          </a>
          , you will find instructions for setup and launch.
        </p>
        <p>
          Stack of technologies: React, Redux, Bootstrap, Firebase, Firestore.
        </p>
      </div>
    </div>
  );
};

export default About;
