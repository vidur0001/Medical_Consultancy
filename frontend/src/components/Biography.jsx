import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img className="image-only" src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <div className="inner">
            <h3>Who We Are</h3>
            <p>
              At Aarogyam Hospital, you are our top priority as we
              care for your health. Our team of health care professionals takes
              care of your needs to offer you personalized attention and the
              medical care of the highest quality throughout your healthcare
              journey. Witness the difference when you choose Aarogyam Hospital
               as your reliable partner for health and fitness
              concerns.
            </p>
            <br></br>
            <p>We are all in 2024!</p>
            {/* <p>We are working on a MERN STACK PROJECT.</p> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              assumenda exercitationem accusamus sit repellendus quo optio
              dolorum corporis corrupti. Quas similique vel minima veniam
              tenetur obcaecati atque magni suscipit laboriosam! Veniam vitae
              minus nihil cupiditate natus provident. Ex illum quasi pariatur
              odit nisi voluptas illo qui ipsum mollitia. Libero, assumenda?
            </p>
            <p>Lorem ipsum dolor sit amet!</p>
            <p>Coding is fun!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Biography;
