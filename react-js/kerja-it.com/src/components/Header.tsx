import MyBlackButton from "./MyBlackButton";
import MyButton from "./MyButton";

function Header() {
  return (
    <header className="flex justify-between items-center mx-[200px] h-[80px]">
      <h1 className="text-xl font-bold">Kerja-IT</h1>
      <div className="space-x-2">
        <MyButton text="Talents" />
        <MyButton text="Post jobs" />
        <MyBlackButton text="Zahin Zulkipli" />
      </div>
    </header>
  );
}

export default Header;
