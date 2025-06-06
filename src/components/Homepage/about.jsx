
// import React, { useEffect, useState } from "react";

// function Reviews() {
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://api.upgadeify.com/api")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("API response:", data);  // ✅ Debug ke liye
//         setReviews(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching reviews:", error);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p>Loading reviews...</p>;
//   }

//   return (
//     <div>
//       <h2>Customer Reviews</h2>
//       {reviews.map((review, index) => (
//         <div key={index} className="review-card">
//           <h3>{review.user}</h3> {/* 👈 Change as per actual field */}
//           <p>{review.review}</p>
//           <strong>Rating: {review.stars}/5</strong>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Reviews;


// try {
//         const response = await fetch(`ddddd/yelp-business-review-list`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 ...headers,
//             },
//             body: JSON.stringify(payload),
//         });
//         const data = await response.json();
 
//         if (!response.ok) {
//             throw new Error(data.message || 'Something went wrong');
//         }
 
//         return data;
//     } catch (error) {
//         throw error;
//     }

// export default Reviews;
