import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const UserHomepage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, []);

  return(
    <>
    </>
  );
};

export default UserHomepage;
