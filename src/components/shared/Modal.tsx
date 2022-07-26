import { FC } from "react";
import Button from "./Button/Button";
import close from "../../assets/svg/Close.svg";
interface IProps {
  openModal: boolean;
  setOpenModal(s: boolean): void;
  onSubmit(e: React.SyntheticEvent): void;
}
const Modal: FC<IProps> = ({ openModal, setOpenModal, onSubmit }) => {
  return (
    <>
      {openModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-[#00000038]">
            <div className="relative w-auto my-6 mx-auto max-w-7xl ">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col min-w-[700px] bg-[#F9F9F9] outline-none focus:outline-none">
                <div className="basis-full flex flex-row justify-between bg-white px-3 py-1 rounded-lg">
                  <div className="flex items-center">
                    <h3 className="font-bold">ایجاد سوال جدید</h3>
                  </div>
                  <button
                    onClick={() => setOpenModal(false)}
                    className="p-2 m-1"
                  >
                    <img src={close} alt="arrow" className="rounded" />
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="w-full" onSubmit={(e) => onSubmit(e)}>
                    <label className="block text-black text-sm font-bold mb-1">
                      موضوع
                    </label>
                    <input
                      type="text"
                      name="title"
                      className="appearance-none border rounded-lg w-full py-2 my-2 px-1 text-black"
                    />
                    <label className="block text-black text-sm font-bold mb-1">
                      متن سوال
                    </label>
                    <textarea
                      rows={5}
                      name="desc"
                      className="appearance-none border rounded-lg w-full h-48 py-2 my-2 px-1 text-black resize-none"
                    />
                    <div className="flex items-center justify-end p-6 rounded-b">
                      <Button
                        color="#27AE60"
                        text="انصراف"
                        onClick={() => setOpenModal(false)}
                      />
                      <Button
                        color="#27AE60"
                        fill
                        text="ایجاد سوال"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
