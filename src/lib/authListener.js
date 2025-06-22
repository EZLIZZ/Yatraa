import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { loginSuccess, logout } from "@/store/slices/authSlice";

export const setupAuthListener = (store) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const safeUser = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };
      store.dispatch(loginSuccess(safeUser));
    } else {
      store.dispatch(logout());
    }
  });
};
