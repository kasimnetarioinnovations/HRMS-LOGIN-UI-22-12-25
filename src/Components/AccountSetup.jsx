
import React, { useState } from "react";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import hrmsSkeleton from "../assets/hrms-skelton.png";

const pagesData = [
  {
    title: "How many employees does your company have?",
    options: [
      "1-10 Employee",
      "10-50 Employee",
      "50-100 Employee",
      "100+ Employee",
    ],
  },
  {
    title: "What type of organization are you?",
    options: [
      "Startup",
      "Small Business",
      "Mid-size Company",
      "Enterprise",
      "NGO/Trust",
    ],
  },
  {
    title: "Which industry do you belong to?",
    options: [
      "IT / Software",
      "Manufacturing",
      "Retail / Wholesale",
      "Healthcare",
      "Education",
      "Logistics",
      "Other",
    ],
  },
  {
    title: "Do you need payroll management?",
    options: [
      "Yes, for all employees",
      "Yes, for selected employees",
      "No, not required",
    ],
  },
  {
    title: "Are you currently using any HR or payroll software?",
    options: ["Yes", "No"],
  },
  {
    title: "How would you like to use the HRMS?",
    options: ["Only Web", "Only Mobile", "Mobile + Web"],
  },
  {
    title: "You're all set!",
    options: [],
  },
];
const AccountSetup = () => {
  const TOTAL_PAGES = 7;
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (page < TOTAL_PAGES - 1) {
      setPage(page + 1);
      setSelected(null);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
      setSelected(null);
    }
  };

  const handleSkip = () => {
    setPage(TOTAL_PAGES - 1);
    setSelected(null);
  };

  return (
    <div className="account-setup-container">
      <div
        className="account-setup"
        style={{
          backgroundColor: "white",
          width: "100%",
          maxWidth: "769px",
          padding: "30px 5px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="account-setup-content"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "689px",
            height: "100vh",
            gap: "24px",
            position: "relative",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {" "}
            {/* Pages Number */}
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {page === TOTAL_PAGES - 1 ? (
                <span style={{ color: "#0084FF", fontSize: "16px" }}>
                  🎉🎉 Completed
                </span>
              ) : (
                <>
                 <span>Account set up</span>
                <span>{page + 1}/7</span>
                </>
              )}
            </span>
            {/* Bar Range */}
            <label style={{ display: "flex", justifyContent: "space-between" }}>
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    backgroundColor: "#D9D9D9",
                    borderRadius: "8px",
                    width: "91px",
                    height: "8px",
                    position: "relative",
                  }}
                >
                  {i < page && (
                    <span
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#0084FF",
                        position: "absolute",
                        borderRadius: "8px",
                      }}
                    />
                  )}
                </span>
              ))}
            </label>
            {/* Previous Button */}
            {page > 0 && (
              <LiaLongArrowAltLeftSolid size={20} onClick={handlePrev} />
            )}
          </div>

          {/* Setup Headline Text*/}
          {page === TOTAL_PAGES - 1 ? (
            <>
              <h1
                style={{
                  fontFamily: "Inter",
                  fontWeight: "400",
                  fontSize: "36px",
                }}
              >
                Your HRMS workspace is ready!
              </h1>

              <div style={{ marginTop: "20px" }}>
                <img
                  src={hrmsSkeleton}
                  alt="HRMS Skeleton"
                  style={{ width: "100%", borderRadius: "20px" }}
                />
              </div>
            </>
          ) : (
            <h1
              style={{
                fontFamily: "Inter",
                fontWeight: "400",
                fontSize: "36px",
              }}
            >
              {pagesData[page].title}
            </h1>
          )}

          {/* Choose Options Button */}
          {page !== TOTAL_PAGES - 1 && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: "10px",
              rowGap: "10px",
            }}
          >
            {pagesData[page].options.map((item, idx) => (
              <span
                key={idx}
                onClick={() => setSelected(item)}
                style={{
                  backgroundColor: selected === item ? "#0084FF" : "#F2F6F9",
                  color: selected === item ? "white" : "black",
                  border: "1px solid #E9E9E9",
                  borderRadius: "45px",
                  padding: "12px 20px",
                  textAlign: "center",
                  fontFamily: "Inter",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                {item}
              </span>
            ))}
          </div>
          )}

          {/* Button */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              position: "absolute",
              bottom: "0",
            }}
          >
             {page === TOTAL_PAGES - 1 ? (
               <>
             <button
              onClick={handleSkip}
              style={{
                width: "336px",
                height: "52px",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "20px",
                padding: "14px 16px",
                color: "#0084FF",
                backgroundColor: "white",
                border: "1px solid #E9E9E9",
                cursor: "pointer",
              }}
            >
              Later
            </button>
             <button
              onClick={handleNext}
              disabled={!selected && page !== TOTAL_PAGES - 1}
              style={{
                width: "336px",
                height: "52px",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "20px",
                padding: "14px 16px",
                color: "white",
                backgroundColor:
                  !selected && page !== TOTAL_PAGES - 1 ? "#A0CFFF" : "#0084FF",
                border: "none",
                cursor:
                  !selected && page !== TOTAL_PAGES - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Start Now
            </button>
            </>
             ):(
               <>
            <button
              onClick={handleSkip}
              style={{
                width: "336px",
                height: "52px",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "20px",
                padding: "14px 16px",
                color: "#0084FF",
                backgroundColor: "white",
                border: "1px solid #E9E9E9",
                cursor: "pointer",
              }}
            >
              Skip
            </button>
            <button
              onClick={handleNext}
              disabled={!selected && page !== TOTAL_PAGES - 1}
              style={{
                width: "336px",
                height: "52px",
                borderRadius: "8px",
                fontFamily: "Inter",
                fontWeight: "500",
                fontSize: "20px",
                padding: "14px 16px",
                color: "white",
                backgroundColor:
                  !selected && page !== TOTAL_PAGES - 1 ? "#A0CFFF" : "#0084FF",
                border: "none",
                cursor:
                  !selected && page !== TOTAL_PAGES - 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next
            </button>
            </>
  )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;







