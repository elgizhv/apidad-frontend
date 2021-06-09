import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ModalHeader from "../../components/Modal/ModalHeader";
import ModalBody from "../../components/Modal/ModalBody";
import { LOGIN_MODAL } from "../../constants/modal";
import { useStore } from "../../store/RootStore";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/Loader/Loader";

function LoginModal() {
  const { modalStore, userStore } = useStore();
  const { modal } = modalStore;
  const { signin } = useAuth();
  const [alert, setAlert] = useState(false);
  const [loader, setLoader] = useState(false);
  const showError = () => {
    setAlert("Giriş yaparken hata oluştu, lütfen tekrar deneyin. ");
  };
  const signIn = async (type) => {
    setAlert(false);
    setLoader(true);
    let result = await signin(type);
    if (!result) showError();
    else modalStore.close();
    setLoader(false);
  };
  return (
    !userStore.user && (
      <Modal
        size="sm"
        visible={modal === LOGIN_MODAL}
        onClose={() => modalStore.close()}
      >
        <ModalHeader onClose={() => modalStore.close()}>Giriş</ModalHeader>
        <ModalBody>
          {alert && <div className="alert alert-danger">{alert}</div>}
          {loader ? (
            <Loader />
          ) : (
            <div className="social-login">
              <a
                onClick={() => signIn("facebook")}
                href="#"
                className="social-button fb"
              >
                <span>Login with Facebook</span>
              </a>
              <a
                onClick={() => signIn("google")}
                href="#"
                className="social-button google"
              >
                <span>Login with Google</span>
              </a>
              {/* <a href="#" className="social-button twitter">
            <span>Connect with Twitter</span>
          </a>
          <a href="#" className="social-button linkedin">
            <span>Connect with LinkedIn</span>
          </a> */}
            </div>
          )}
        </ModalBody>
      </Modal>
    )
  );
}

export default observer(LoginModal);
