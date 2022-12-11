// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { reset, passwordChange, logout } from "../features/auth/user/authSlice";
// import { toast } from "react-toastify";
// import Spinner from "../components/atoms/Spinner";

// function ChangePassword() {
//   const [formData, setFormData] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const { oldPassword, newPassword, confirmNewPassword } = formData;

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Data from Redux state handling
//   const { user, isLoading, isStatus, message } = useSelector(
//     (state) => state.auth
//   );

//   // Handling the onChange on the Form
//   const onChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.id]: e.target.value,
//     });
//   };

//   // Submitting the Change Password Form
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (newPassword !== confirmNewPassword) {
//       toast.error("Password does not match");
//     } else {
//       dispatch(passwordChange(formData));
//       dispatch(logout());
//       dispatch(reset());
//       navigate("/login");
//     }
//   };

//   // Handling the Spinner
//   if (isLoading) {
//     return <Spinner />;
//   }

//   return (
//     <div className="container mx-auto grid grid-cols-1 place-items-center">
//       <div className="w-[300px] pt-10">
//         <h3 className="text-center mt-4 font-bold text-2xl">Change Password</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mt-2 w-full">
//             <label className="label text-black">
//               <span className="label-text text-sm">Old Password</span>
//             </label>
//             <input
//               type="password"
//               id="oldPassword"
//               value={oldPassword}
//               onChange={onChange}
//               className="p-2 border-2 border-gray-400 rounded-lg w-full"
//               placeholder="Old Password"
//               required
//             />
//           </div>
//           <div className="mt-2 w-full">
//             <label className="label text-black">
//               <span className="label-text text-sm">New Password</span>
//             </label>
//             <input
//               type="password"
//               id="newPassword"
//               value={newPassword}
//               onChange={onChange}
//               className="p-2 border-2 border-gray-400 rounded-lg w-full"
//               placeholder="New Password"
//               required
//             />
//           </div>
//           <div className="mt-2 w-full">
//             <label className="label text-black">
//               <span className="label-text text-sm">Confirm Password</span>
//             </label>
//             <input
//               type="password"
//               id="confirmNewPassword"
//               value={confirmNewPassword}
//               onChange={onChange}
//               className="p-2 border-2 border-gray-400 rounded-lg w-full"
//               placeholder="Confirm new Password"
//               required
//             />
//           </div>
//           <div className="mt-6 w-full">
//             <button
//               type="submit"
//               className="bg-[#0FA4F9] text-white p-3 font-bold uppercase text-md rounded-lg w-full"
//             >
//               send
//             </button>
//           </div>
//           <p className="text-center text-sm mt-4">
//             Don’t have an account?
//             <span className="text-[#0FA4F9] ml-2 hover:underline">
//               <Link to="/register">Sign up</Link>
//             </span>
//           </p>
//         </form>
//       </div>

//       <footer className="text-center absolute bottom-0">
//         <div className="flex justify-center items-center gap-2 text-center pb-4 text-sm">
//           <p className="hover:underline">
//             <Link to="/">© GetBlack</Link>
//           </p>
//           <p className="hover:underline">
//             <Link to="/contact">Contact</Link>
//           </p>
//           <p className="hover:underline">
//             <Link to="#">Privacy & terms</Link>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default ChangePassword;
