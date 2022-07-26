import React, { FC, useRef } from "react";
import Button from "../../shared/Button/Button";

interface IProps {
  onSubmit(e: React.SyntheticEvent): void;
}
export const AddReply: FC<IProps> = ({ onSubmit }) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <div className="flex w-full justify-center items-center px-10 py-5">
      <form
        ref={formRef}
        className="w-full"
        onSubmit={(e) => {
          onSubmit(e);
          // reset form after submit
          if (formRef.current !== null) {
            formRef.current.reset();
          }
        }}
      >
        <label className="block text-black text-sm font-bold mb-1">
          پاسخ خود را بنویسید
        </label>
        <textarea
          rows={5}
          name="desc"
          className="appearance-none border rounded-lg w-full h-48 py-2 my-2 px-1 text-black resize-none"
        />
        <div className="flex items-center rounded-b">
          <Button color="#27AE60" fill text="ارسال پاسخ" type="submit" />
        </div>
      </form>
    </div>
  );
};
