import apiClient from "@/API/apiClient";
import { useEffect } from "react";

const VendorsPages = () => {
  useEffect(() => {
    apiClient.get("/admin/vendors").then((response) => {
      console.log(response.data);
    });
  }, []);

  return <div>VendorsPages</div>;
};
export default VendorsPages;
