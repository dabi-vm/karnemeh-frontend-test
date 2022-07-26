import { useState } from "react";
import avatar from "../../../assets/img/avatar.jpg";
import arrow from "../../../assets/svg/Polygon.svg";
import Modal from "../../shared/Modal";

export const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      title: { value: string };
      desc: { value: string };
    };
    const values = {
      title: target.title.value,
      desc: target.desc.value,
    };
    
  };
  return (
    <>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        onSubmit={submitHandler}
      />
      <nav className="top-0 fixed z-40 w-full flex items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="flex basis-1/4">
            <h2 className="text-2xl font-bold">لیست سوالات</h2>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => setOpenModal(true)}
              className="bg-[#27AE60] py-2 px-5 my-1 mx-6 rounded text-white hover:shadow-lg focus:shadow-none focus:bg-opacity-90"
            >
              + سوال جدید
            </button>
            <img
              src={avatar}
              alt="avatar"
              className="rounded w-[44px] h-[44px] my-1 mx-2"
            />
            <span className="my-1 mx-2">الناز شاکردوست</span>
            <button className="p-2 m-1">
              <img src={arrow} alt="arrow" className="rounded" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
