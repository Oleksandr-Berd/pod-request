import { useEffect, useState } from "react";

import * as SC from "./SharedLayoutStyled";


import Content from "../../components/Content/Content";
import LinkList from "../../components/LinkList/LinkList";
import RequestForm from "../../components/RequestForm/RequestForm";
import { User } from "../../utils/interfaces";
import { toast } from "react-toastify";

const SharedLayout: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleSubmit = (data:User) => {
    setUser(data)
  }

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
      <LinkList />
      <RequestForm handleSubmit={handleSubmit}/>
    </SC.SharedLayoutCustom>
  );
};

export default SharedLayout;
