import { useEffect, useState } from "react";

import * as SC from "./SharedLayoutStyled";

import Content from "../../components/Content/Content";
import LinkList from "../../components/LinkList/LinkList";
import RequestForm from "../../components/RequestForm/RequestForm";
import { User } from "../../utils/interfaces";
import { toast } from "react-toastify";
import { useScreenSize } from "../../utils/hooks/useScreenSize";
import Geometry from "../../components/Geometry/Geometry";

const SharedLayout: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const { isTablet } = useScreenSize();

  const handleSubmit = (data: User) => {
    setUser(data);
  };

  useEffect(() => {
    if (user && !toast.isActive("success-toast")) {
      toast.success(`We'll write you on ${user.email} ASAP`, {
        toastId: "success-toast",
      });

      const timer = setTimeout(() => setUser(null), 4000);

      return () => clearTimeout(timer);
    }
  }, [user]);

  return (
    <SC.SharedLayoutCustom>
      <Content />
      {isTablet ? (
        <>
          <RequestForm handleSubmit={handleSubmit} />
          <LinkList />
        </>
      ) : (
        <>
          <LinkList />
          <RequestForm handleSubmit={handleSubmit} />
        </>
      )}
      {isTablet ? <Geometry/> : null}
    </SC.SharedLayoutCustom>
  );
};

export default SharedLayout;
