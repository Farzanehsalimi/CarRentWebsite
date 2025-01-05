import { Heart } from "iconsax-react";
import { Notification } from "iconsax-react";
import { Setting2 } from "iconsax-react";

function Header() {
  return (
    <div className="flex justify-around items-center bg-white sticky top-0 z-50 py-4 shadow-xl">
      <div>
        <img src="/src/assets/icons/Logo.svg" alt="logo" />
      </div>
      <div>
        <input type="text" />
      </div>
      <div className="flex items-center gap-4">
        <div className="border rounded-full p-2">
          <Heart size="22" color="#596780" variant="Bold" />
        </div>
        <div className="border rounded-full p-2">
          <Notification size="22" color="#596780" variant="Bold" />
        </div>
        <div className="border rounded-full p-2">
          <Setting2 size="22" color="#596780" variant="Bold" />
        </div>
        <div>
          <img
            className="w-10"
            src="/src/assets/images/profile.png"
            alt="profile-pic"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
