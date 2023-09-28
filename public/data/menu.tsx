import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
export const menus = [
  
  {
    title: "Home",
    url: "/",
  },
  
  
  {
    title: "Tours",
    url: "/tour-listing-grid",
  },
  {
    title: "About Us",
    url: "/about-us",
  },
  
  { title: "Faq", url: "/faq" },
  { title: "Contact Us", url: "/contact" },
 
   
  {
    title: "Dashboard",
    submenu: [
      {
        title: "User Dashboard",
        url: "/user",
      },
      {
        title: "Vendor Dashboard",
        url: "/vendor-dashboard",
      },
      {
        title: "Admin Dashboard",
        url: "/admin-dashboard",
      },
    ],
  },
  
];