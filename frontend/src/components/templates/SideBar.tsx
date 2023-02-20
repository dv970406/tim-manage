import { SideBarSection } from "../atomics/sections/sections";
import MenuButton from "../organisms/sidebar/MenuButton";
import { faHome } from "@fortawesome/pro-solid-svg-icons";

const SideBar = () => {
  return (
    <SideBarSection>
      SideBar
      <MenuButton text="Pages" icon={faHome} />
    </SideBarSection>
  );
};

export default SideBar;
