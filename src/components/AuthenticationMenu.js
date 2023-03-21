import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { useState, useContext } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../config/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export function AuthenticationMenu() {
  const { currentUser } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOpen = () => {
    setOpenModal(true);
    resetForm();
  };
  const handleClose = () => {
    setOpenModal(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async () => {
    if (!email || !password) return;

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("authUser", JSON.stringify(userCredential.user));
        toast.success("Login successfully!");
      })
      .catch((error) => toast.error(error.message));
  };

  const logInWithGoogle = async () =>
    await signInWithPopup(auth, googleProvider)
      .then((userCredential) =>
        localStorage.setItem("authUser", JSON.stringify(userCredential.user))
      )
      .catch((error) => console.log(error));

  const logOut = async () => {
    signOut(auth);
    setOpenModal(false);
    localStorage.removeItem("authUser");
  };

  const modal = (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { marginBottom: 3 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="bg-white min-h-[300px] w-[90%] mt-[40%] md:mt-[20%] lg:w-[30%] xl:w-[20%] md:w-[40%] rounded-lg mx-auto p-5 text-center">
          <h2 className="text-3xl text-black font-bold text-center mb-8">
            Login
          </h2>
          <TextField
            fullWidth
            required
            id="email"
            label="Email"
            type="email"
            placeholder="Email"
            size="small"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText=""
            error={email ? false : true}
          />

          <TextField
            fullWidth
            required
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            helperText=""
            error={password ? false : true}
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            fullWidth
            className="cursor-pointer"
          >
            Login
          </Button>
          <div className="clearfix"></div>
          <div className="h-2"></div>
          <Button
            variant="outlined"
            fullWidth
            onClick={logInWithGoogle}
            className="cursor-pointer"
          >
            <Stack spacing={2} direction="row" className="text-gray-400">
              <GoogleIcon className="text-green-200"></GoogleIcon>
              <span> Login with Google</span>
            </Stack>
          </Button>
          <Toaster />
        </div>
      </Box>
    </Modal>
  );

  if (currentUser)
    return (
      <div className="text-right mt-3">
        <Button variant="contained" onClick={logOut}>
          Logout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    );

  return (
    <>
      {modal}
      <div className="text-right mt-8 md:mt-4 flex justify-center md:justify-end">
        <Stack spacing={2} direction="row">
          <Button size="small" variant="contained" onClick={handleOpen}>
            Login
          </Button>
          <Button size="small" variant="contained">
            Register
          </Button>
        </Stack>
      </div>
    </>
  );
}
