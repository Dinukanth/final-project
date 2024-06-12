import React, { useEffect, useState } from 'react';
import './mechHome.css';
import Navmech from './Navmech';

const MechanicUserPage = () => {
  const [mechanic, setMechanic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMechanicDetails = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setError("No token found. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("http://localhost:3004/mech/getmech", {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': token,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMechanic(data);
        } else {
          const errorData = await response.json();
          setError(errorData.message || "Failed to fetch mechanic details.");
        }
      } catch (error) {
        console.error("Error fetching mechanic details:", error);
        setError("Error fetching mechanic details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMechanicDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!mechanic) {
    return <div>No mechanic details found. Please log in again.</div>;
  }

  const {
    Name,
    Email,
    Phonenumber,
    Address,
    WhatkindofMechanic,
    GarageLocation,
    latitude,
    longitude
  } = mechanic;

  return (
    <>
      <Navmech />
      <div className="mechanic-container">
        <div className="profile-section">
          <img
            src={GarageLocation}
            alt="Avatar"
            className="profile-avatar"
          />
          <div className="profile-details">
            <h1>{Name}</h1>
            <h3>Mechanic</h3>
          </div>
        </div>
        <div className="details-section">
          <div className="details-card">
            <ul>
              <li><b>Full Name:</b> {Name}</li>
              <li><b>Email:</b> {Email}</li>
              <li><b>Contact Number:</b> {Phonenumber}</li>
              <li><b>Address:</b> {Address}</li>
              <li><b>Type of Mechanic:</b> {WhatkindofMechanic}</li>
            </ul>
          </div>
          <div className="map-container">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
              title={Name}
              style={{ border: 0 }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default MechanicUserPage;

























// import React, { useEffect, useState } from 'react';
// import './mechHome.css';
// import Navmech from './Navmech';

// const MechanicUserPage = () => {
//   const [mechanic, setMechanic] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMechanicDetails = async () => {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         setError("No token found. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:3004/mech/getmech", {
//           headers: {
//             'Content-Type': 'application/json',
//             'x-auth-token': token,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setMechanic(data);
//         } else {
//           const errorData = await response.json();
//           setError(errorData.message || "Failed to fetch mechanic details.");
//         }
//       } catch (error) {
//         console.error("Error fetching mechanic details:", error);
//         setError("Error fetching mechanic details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMechanicDetails();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!mechanic) {
//     return <div>No mechanic details found. Please log in again.</div>;
//   }

//   const {
//     Name,
//     Email,
//     Phonenumber,
//     Address,
//     WhatkindofMechanic,
//     GarageLocation,
//     latitude,
//     longitude
//   } = mechanic;

//   return (
//     <>
//       <Navmech />
//       <div className="mechanic-container">
//         <div className="profile-section">
//           <img
//             src={GarageLocation}
//             alt="Avatar"
//             className="profile-avatar"
//           />
//           <div className="profile-details">
//             <h1>{Name}</h1>
//             <h3>Mechanic</h3>
//           </div>
//         </div>
//         <div className="details-section">
//           <div className="details-card">
//             <ul>
//               <li><b>Full Name:</b> {Name}</li>
//               <li><b>Email:</b> {Email}</li>
//               <li><b>Contact Number:</b> {Phonenumber}</li>
//               <li><b>Address:</b> {Address}</li>
//               <li><b>Type of Mechanic:</b> {WhatkindofMechanic}</li>
//             </ul>
//           </div>
//           <div className="map-container">
//             <iframe
//               width="100%"
//               height="100%"
//               src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
//               title={Name}
//               style={{ border: 0 }}
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MechanicUserPage;













// import React, { useEffect, useState } from 'react';
// import './mechHome.css';
// import Navmech from './Navmech';

// const MechanicUserPage = () => {
//   const [mechanic, setMechanic] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMechanicDetails = async () => {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         setError("No token found. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:3004/mech/getmech", {
//           headers: {
//             'Content-Type': 'application/json',
//             'x-auth-token': token,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setMechanic(data);
//         } else {
//           const errorData = await response.json();
//           setError(errorData.message || "Failed to fetch mechanic details.");
//         }
//       } catch (error) {
//         console.error("Error fetching mechanic details:", error);
//         setError("Error fetching mechanic details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMechanicDetails();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!mechanic) {
//     return <div>No mechanic details found. Please log in again.</div>;
//   }

//   const {
//     Name,
//     Email,
//     Phonenumber,
//     Address,
//     WhatkindofMechanic,
//     GarageLocation,
//     latitude,
//     longitude
//   } = mechanic;

//   return (
//     <>
//       <Navmech />
//       <div className="mechanic-container">
//         <div className="profile-section">
//           <img
//             src={GarageLocation}
//             alt="Avatar"
//             className="profile-avatar"
//           />
//           <h1>{Name}</h1>
//           <h3>Mechanic</h3>
//         </div>
//         <div className="details-section">
//           <div className="details-card">
//             <ul className="mechanic-details">
//               <li><b>Full Name:</b> {Name}</li>
//               <li><b>Email:</b> {Email}</li>
//               <li><b>Contact Number:</b> {Phonenumber}</li>
//               <li><b>Address:</b> {Address}</li>
//               <li><b>Type of Mechanic:</b> {WhatkindofMechanic}</li>
//             </ul>
//           </div>
//           <div className="map-container">
//             <iframe
//               width="100%"
//               height="100%"
//               src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
//               title={Name}
//               style={{ border: 0 }}
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MechanicUserPage;







// import React, { useEffect, useState } from 'react';
// import './mechHome.css';
// import Navmech from './Navmech';

// const MechanicUserPage = () => {
//   const [mechanic, setMechanic] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMechanicDetails = async () => {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         setError("No token found. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:3004/mech/getmech", {
//           headers: {
//             'Content-Type': 'application/json',
//             'x-auth-token': token,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setMechanic(data);
//         } else {
//           const errorData = await response.json();
//           setError(errorData.message || "Failed to fetch mechanic details.");
//         }
//       } catch (error) {
//         console.error("Error fetching mechanic details:", error);
//         setError("Error fetching mechanic details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMechanicDetails();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!mechanic) {
//     return <div>No mechanic details found. Please log in again.</div>;
//   }

//   const {
//     Name,
//     Email,
//     Phonenumber,
//     Address,
//     WhatkindofMechanic,
//     GarageLocation,
//     latitude,
//     longitude
//   } = mechanic;

//   return (
//     <>
//       <Navmech />
//       <div className="mechanic-container">
//         <div className="profile-section">
//           <img
//             src={GarageLocation}
//             alt="Avatar"
//             className="profile-avatar"
//           />
//           <h1>{Name}</h1>
//           <h3>Mechanic</h3>
//         </div>
//         <div className="details-section">
//           <div className="details-card">
//             <ul className="mechanic-details">
//               <li><b>Full Name:</b> {Name}</li>
//               <li><b>Email:</b> {Email}</li>
//               <li><b>Contact Number:</b> {Phonenumber}</li>
//               <li><b>Address:</b> {Address}</li>
//               <li><b>Type of Mechanic:</b> {WhatkindofMechanic}</li>
//             </ul>
//           </div>
//           <div className="map-container">
//             <iframe
//               width="100%"
//               height="100%"
//               src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
//               title={Name}
//               style={{ border: 0 }}
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MechanicUserPage;














// import React, { useEffect, useState } from 'react';
// import './mechHome.css';
// import Navmech from './Navmech';

// const MechanicUserPage = () => {
//   const [mechanic, setMechanic] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchMechanicDetails = async () => {
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         setError("No token found. Please log in again.");
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await fetch("http://localhost:3004/mech/get", {
//           headers: {
//             'Content-Type': 'application/json',
//             'x-auth-token': token,
//           },
//         });

//         if (response.ok) {
//           const data = await response.json();
//           if (data.length > 0) {
//             setMechanic(data[0]); // Assuming data is an array, take the first element
//           } else {
//             setError("No mechanic details found.");
//           }
//         } else {
//           const errorData = await response.json();
//           setError(errorData.message || "Failed to fetch mechanic details.");
//         }
//       } catch (error) {
//         console.error("Error fetching mechanic details:", error);
//         setError("Error fetching mechanic details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMechanicDetails();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!mechanic) {
//     return <div>No mechanic details found. Please log in again.</div>;
//   }

//   const {
//     Name,
//     Email,
//     Phonenumber,
//     Address,
//     WhatkindofMechanic,
//     GarageLocation,
//     latitude,
//     longitude
//   } = mechanic;

//   return (
//     <>
//       <Navmech />
//       <div className="mechanic-container">
//         <div className="profile-section">
//           <img
//             src={GarageLocation}
//             alt="Avatar"
//             className="profile-avatar"
//           />
//           <h1>{Name}</h1>
//           <h3>Mechanic</h3>
//         </div>
//         <div className="details-section">
//           <div className="details-card">
//             <ul className="mechanic-details">
//               <li><b>Full Name:</b> {Name}</li>
//               <li><b>Email:</b> {Email}</li>
//               <li><b>Contact Number:</b> {Phonenumber}</li>
//               <li><b>Address:</b> {Address}</li>
//               <li><b>Type of Mechanic:</b> {WhatkindofMechanic}</li>
//             </ul>
//           </div>
//           <div className="map-container">
//             <iframe
//               width="100%"
//               height="100%"
//               src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`}
//               title={Name}
//               style={{ border: 0 }}
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MechanicUserPage;














// import React from 'react';
// import './mechHome.css';
// import Navmech from './Navmech';

// const MechanicUserPage = () => {
//   // Dummy data for demonstration purposes
//   const mechanic = {
//     Name: 'Vimal',
//     Email: 'vimall@gmail.com',
//     Phonenumber: '0745689754',
//     Address: 'Bike',
//     WhatkindofMechanic: 'Bike',
//     GarageLocation: 'https://i.ibb.co/yNGW4gg/avatar.png',
//     latitude: '7.2303143',
//     longitude: '80.016474'
//   };

//   return (
//     <>
//       <Navmech />
//       <div className="mechanic-container">
//         <div className="profile-section">
//           <img
//             src={mechanic.GarageLocation}
//             alt="Avatar"
//             className="profile-avatar"
//           />
//           <h1>{mechanic.Name}</h1>
//           <h3>Mechanic</h3>
//         </div>
//         <div className="details-section">
//           <div className="details-card">
//             <ul className="mechanic-details">
//               <li><b>Full Name:</b> {mechanic.Name}</li>
//               <li><b>Email:</b> {mechanic.Email}</li>
//               <li><b>Contact Number:</b> {mechanic.Phonenumber}</li>
//               <li><b>Address:</b> {mechanic.Address}</li>
//               <li><b>Type of Mechanic:</b> {mechanic.WhatkindofMechanic}</li>
//             </ul>
//           </div>
//           <div className="map-container">
//             <iframe
//               width="100%"
//               height="100%"
//               src={`https://www.google.com/maps?q=${mechanic.latitude},${mechanic.longitude}&hl=es;z=14&output=embed`}
//               title={mechanic.Name}
//               style={{ border: 0 }}
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MechanicUserPage;


