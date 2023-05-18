import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TOKEN } from "../../client/client";

interface IUseCheckManager {
  isManager?: boolean;
  isLeader?: boolean;
}

// 관리자만이 접근할 수 있는 페이지에서 본인이 관리자인지 체크하는 로직
export const useCheckManager = ({
  isManager = false,
  isLeader = false,
}: IUseCheckManager) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) {
      navigate("/login");
      return;
    }

    // manager페이지인데 manager아닌 사람이 접근하려고 할 때 접근 제한
    const isManagerOnlyPage = pathname.includes("manager");
    // 단, manager/vacation은 leader는 접근 가능
    const isManagerVacationPage = pathname.includes("/manager/vacation");

    if (isManagerOnlyPage) {
      if (isManager) return;
      if (isManagerVacationPage && isLeader) return;
      alert("관리자만 접근할 수 있습니다.");

      navigate("/");
    }
  }, []);
};
