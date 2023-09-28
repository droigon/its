export const sidenavData = [
  
  {
    id: 2,
    name: "Tour",
    icon: <i className="las la-umbrella text-2xl"></i>,
    submenus: [
      { url: "/tour/all-tour", title: "All Tours" },
      { url: "/tour/add-new-tour", title: "Add New Tour" },

      
      { url: "/tour/availability", title: "Availability" },
      { url: "/tour/booking-calendar", title: "Booking Calendar" },
      
    ],
  },
  {
    id: 3,
    name: "Space",
    icon: <i className="las la-network-wired text-2xl"></i>,
    submenus: [
      { url: "/space/all-space", title: "All Space" },
      { url: "/space/add-new-space", title: "Add New Space" },
      { url: "/space/attributes", title: "Attributes" },
      { url: "/space/availability", title: "Availability" },
      { url: "/space/recovery", title: "Recovery" },
    ],
  },
  {
    id: 4,
    name: "Flight",
    icon: <i className="las la-plane-departure text-2xl"></i>,
    submenus: [
      { url: "/flight/all-flight", title: "All Flight" },
      { url: "/flight/add-new-flight", title: "Add New Flight" },
      { url: "/flight/airline", title: "Airline" },
      { url: "/flight/airport", title: "Airport" },
      { url: "/flight/seat-type", title: "Seat Type" },
      { url: "/flight/attributes", title: "Attributes" },
    ],
  },

  {
    id: 7,
    name: "Event",
    icon: <i className="las la-calendar-alt text-2xl"></i>,
    submenus: [
      { url: "/event/all-event", title: "All Event" },
      { url: "/event/add-new-event", title: "Add New Event" },
      { url: "/event/attributes", title: "Attributes" },
      { url: "/event/availability", title: "Availablility" },
      { url: "/event/recovery", title: "Recovery" },
    ],
  },
  {
    id: 8,
    name: "Cancel Booking",
    icon: <i className="las la-calendar-times text-2xl"></i>,
    url: "/cancel-booking",
  },
  {
    id: 10,
    name: "Guests",
    icon: <i className="las la-user-circle text-2xl"></i>,
    submenus: [
      { url: "/guest/guests-list", title: "Guests List" },
      { url: "/guest/guests-details", title: "Guests Details" },
    ],
  },
  {
    id: 11,
    name: "Agents",
    icon: <i className="las la-user-friends text-2xl"></i>,
    submenus: [
      { url: "/agent/agents-list", title: "Agents List" },
      { url: "/agent/agents-details", title: "Agents Details" },
      { url: "/agent/agents-withdraw", title: "Agents Withdraw" },
    ],
  },
  {
    id: 12,
    name: "Chat",
    icon: <i className="las la-sms text-2xl"></i>,
    url: "/chat",
  },
  {
    id: 13,
    name: "Reviews",
    icon: <i className="lar la-star text-2xl"></i>,
    url: "/reviews",
  },
  {
    id: 14,
    name: "Coupon",
    icon: <i className="las la-ticket-alt text-2xl"></i>,
    url: "/coupon",
  },
  {
    id: 15,
    name: "Total Earnings",
    icon: <i className="las la-hand-holding-usd text-2xl"></i>,
    submenus: [
      { url: "/earning/tax-calculate", title: "Tax Calculate" },
      { url: "/earning/subscription-earn", title: "Subscription Earn" },
      { url: "/earning/withdraw-earn", title: "Withdraw Earn" },
      { url: "/earning/commission-earn", title: "Commission Earn" },
    ],
  },
  {
    id: 16,
    name: "General Settings",
    icon: <i className="las la-cog text-2xl"></i>,
    submenus: [
      { url: "/settings/logo", title: "Logo" },
      { url: "/settings/favicon", title: "Favicon" },
      { url: "/settings/loader", title: "Loader" },
      { url: "/settings/website-content", title: "Website Content" },
      { url: "/settings/footer", title: "Footer" },
      { url: "/settings/error-page", title: "Error Page" },
    ],
  },
  {
    id: 17,
    name: "Payment Settings",
    icon: <i className="las la-credit-card text-2xl"></i>,
    submenus: [
      { url: "/payment/info", title: "Payment Info" },
      { url: "/payment/gateway", title: "Payment Gateway" },
      { url: "/payment/currencies", title: "Currencies" },
      { url: "/payment/reward", title: "Reward Info" },
    ],
  },
  {
    id: 18,
    name: "Admin Settings",
    icon: <i className="las la-user-cog text-2xl"></i>,
    url: "/admin-settings",
  },
  {
    id: 19,
    name: "Authentication",
    icon: <i className="las la-user-shield text-2xl"></i>,
    submenus: [
      { url: "/auth/signup", title: "Sign up" },
      { url: "/auth/signin", title: "Sign in" },
      { url: "/auth/error", title: "404 Error" },
    ],
  },
];
