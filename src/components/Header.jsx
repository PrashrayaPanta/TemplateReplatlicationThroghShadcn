import { SheetSide } from "./Sheet";
import NavigationItemWithInternalSeparator from "./NavigationItemWithInternalSepator";

const Header = () => {
  return (
    <header class="flex justify-between items-center px-10 bg-red-400 fixed top-0 left-0 right-0 mb-96">
      <div className="md:block hidden">
        <img
          src="https://www.bibhutisolutions.com/wp-content/uploads/2022/05/main-logo.png"
          alt=""
          srcset=""
        />
      </div>

      <div className="block md:hidden">
        <NavigationItemWithInternalSeparator />
      </div>
    </header>
  );
};

export default Header;
