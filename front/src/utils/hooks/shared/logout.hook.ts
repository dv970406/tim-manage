import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../../client/client";

export const useLogout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(TOKEN);
    navigate("/login");
    // 로그아웃 시 cache(store) 초기화 목적의 새로고침
    window.location.reload();
  };
  return { handleLogout };
};
