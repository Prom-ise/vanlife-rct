import React from "react";
import Host from "./Host";
import review from "../assets/image/review.png"
import star4 from "../assets/image/Star 4.png"

const Review = () => {
  return (
    <div>
        <Host/>
      <div style={{ padding: "2% 10% 7% 8%", backgroundColor: "#fff7ed" }}>
        <div className="flex gap-3">
          <div>
          <p className="explore fw-bold">Your Reviews</p>
          </div>
         
          <div className="mt-4 fs-5">
        <p className="mt-3"> Last <span style={{textDecoration:"underline", fontWeight:"700"}}>30 days</span> </p>
        </div>
        </div>

        <div style={{ marginTop: "5%", marginBottom: "9%" }}>
          <img className="col-lg-11 col-12" src={review} alt="Chart Review" />
        </div>

        <div className="bord">
          <h4 className="card-title fw-bold mt-5">Reviews (2)</h4>
          <div className="flex space-x-2 mt-4">
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
          </div>

          <h5 className="eliot">Elliot <span style={{color: "#8C8C8C"}}> December 1, 2022</span></h5>
          <p className="beach-bum">The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</p>
        </div>
        <div className="bord mt-5">
        <div className="flex space-x-2 mt-4">
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
            <img className="star-img" src={star4} alt="stars" />
          </div>

          <h5 className="eliot">Sandy <span style={{color: "#8C8C8C"}}> November 23, 2022</span></h5>
          <p className="beach-bum">This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
