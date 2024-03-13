import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container flex justify-between items-center p-8 border-b-2">
        <h3 className="text-[#111] text-4xl font-bold">Knowledge Cafe</h3>
        <img src={profile} alt="" />
      </div>
    </div>
  );
};

export default Header;
