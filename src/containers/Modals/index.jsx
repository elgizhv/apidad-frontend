import LoginModal from "./Login";

export default function ModalRouter() {
  const modals = [{ component: LoginModal }];

  return modals.map((item, index) => {
    const Component = item.component;
    return <Component key={index} />;
  });
}
