import { FC, memo } from "react";

interface IProps {
  text: string;
  color: string;
  type?: "submit";
  fill?: true;
  onClick?(): void;
}
const Button: FC<IProps> = ({ color, text, fill, onClick, type }) => {
  return (
    <button
      className="border font-semibold py-2 px-5 m-1 rounded hover:shadow-lg focus:shadow-none focus:bg-opacity-90"
      onClick={() => onClick && onClick()}
      style={{
        color: fill ? "#fff" : color,
        borderColor: fill ? "" : color,
        backgroundColor: fill && color,
      }}
      type={type ?? "button"}
    >
      {text}
    </button>
  );
};

export default memo(Button);
