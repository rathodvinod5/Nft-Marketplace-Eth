import HeaderContainer from "./HeaderSections";
import WalletContentContainer from "./WalletContentContainer";

const ProfilePagae = () => {
  return (
    <div className="w-full h-full px-8 py-2 pb-6 bg-custom-primaryBackground text-white">
      <HeaderContainer />
      <WalletContentContainer />
    </div>
  );
};

export default ProfilePagae;
