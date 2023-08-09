import spinner from "../assets/svg/spinner.svg";
export default function Spinner() {
  return (
    <div className="h-24">
      <div className=" bg-opacity-50 flex items-center justify-center fixed left-0 right-0 top-0 bottom-0">
        <img src={spinner} alt="Loading..." className="h-28 " />
      </div>
    </div>
  );
}

