import React from "react";
import Host from "./Host";
import { NavLink } from "react-router-dom";
import star from "../assets/image/star.png";
import five from "../assets/image/Rectangle 154.png";
import three from "../assets/image/three.png";
import eight from "../assets/image/Rectangle 155.png";

const Dashboard = () => {
  return (
    <>
      <Host />
      <div style={{ padding: "2% 0% 0% 0%", backgroundColor: "#ffead0" }}>
        <div style={{ padding: "0% 10% 3% 8%" }}>
          <div className="explore fw-bold">Welcome</div>
          <div className="last-income mt-3 mb-4">
            <div className="flex gap-1">
              Income last{" "}
              <span style={{ textDecoration: "underline", fontWeight: "700" }}>
                <NavLink to="/Host/income" className="last-income">
                  {" "}
                  30 days{" "}
                </NavLink>{" "}
              </span>
            </div>
            <div>
              <NavLink
                to="/Host/income"
                className="last-income"
                style={{ color: "#161616", textDecoration: "none" }}
              >
                Details
              </NavLink>
            </div>
          </div>
          <div className="explore fw-bold mt-3">$2,260</div>
        </div>
        <div
          style={{
            padding: "2% 10% 3% 8%",
            backgroundColor: "#ffddb2",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="score-review">
            <div>Review score</div>
            <div className="mt-2 ms-2">
              <img src={star} alt="..." />
            </div>
          </div>
          <div>
            <NavLink
              to="/host/review"
              style={{
                color: "#161616",
                textDecoration: "none",
                fontSize: "19px",
                fontWeight: "500",
              }}
            >
              Details
            </NavLink>
          </div>
        </div>

        <div style={{ padding: "2% 10% 4% 8%", backgroundColor: "#fff7ed" }}>
          <div className="vansList">
            <div className="listed-vans">Your listed vans</div>
            <div>
              <NavLink
                style={{
                  color: "#161616",
                  fontSize: "19px",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                to="/Host/Vans"
              >
                View All
              </NavLink>
            </div>
          </div>
          <div className="vans-list-contain row">
            <div className="vans-list-container mt-4 col-lg-12 col-md-12 col-12">
              <div className="d-flex">
                <span>
                  <img src={five} alt="Modest Explorer" />
                </span>
                <div className="modern-van">
                  <span>Modest Explorer</span> 60$/day
                </div>
              </div>
              <div
                className="det"
                style={{
                  color: "#161616",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Edit
              </div>
            </div>
            <div className="vans-list-container my-5 col-lg-12 col-md-12 col-12">
              <div className="d-flex">
                <span>
                  <img src={three} alt="Modern Explorer" />
                </span>
                <div className="modern-van">
                  <span>Beach Bum</span> 80$/day
                </div>
              </div>
              <div
                className="det"
                style={{
                  color: "#161616",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Edit
              </div>
            </div>
            <div className="vans-list-container col-lg-12 col-md-12 col-12">
              <div className="d-flex">
                <span>
                  <img src={eight} alt="Modern Explorer" />
                </span>
                <div className="modern-van">
                  <span>Green Wonder</span> 70$/day
                </div>
              </div>
              <div
                className="det"
                style={{
                  color: "#161616",
                  fontSize: "19px",
                  fontWeight: "500",
                }}
              >
                Edit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
