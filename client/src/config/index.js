export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addEventFormElements = [
  {
    label: "Event Name",
    name: "eventName",
    componentType: "input",
    type: "text",
    placeholder: "Enter event name",
  },
  {
    label: "Type",
    name: "type",
    componentType: "select",
    options: [
      { id: "social", label: "Social" },
      { id: "arts", label: "Arts" },
      { id: "academics", label: "Academics" },
      { id: "career", label: "Career & Job Search" },
      { id: "health", label: "Health" },
      { id: "sciencetechnology", label: "Science & Technology" },
    ],
  },
  {
    label: "Participant Limit",
    name: "participantLimit",
    componentType: "input",
    type: "number",
    placeholder: "Enter participant limit",
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter event price (if any)",
  },
  {
    label: "Date & Time",
    name: "eventDate",
    componentType: "input",
    type: "datetime-local",
    placeholder: "Select date and time",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter event description",
  },
];

export const eventUserHeader = [
  {
    id: "home",
    label: "Home",
    path: "/home",
  },
  {
    id: "events",
    label: "Events",
    path: "/listing",
  },
  {
    id: "search",
    label: "Search",
    path:"/search"
  },
];


export const eventFilterOptions = {
  type: [
    { id: "social", label: "Social" },
    { id: "arts", label: "Arts" },
    { id: "academics", label: "Academics" },
    { id: "career", label: "Career & Job Search" },
    { id: "health", label: "Health" },
    { id: "sciencetechnology", label: "Science & Technology" },
  ],
  price: [
    { id: "free", label: "Free" },
    { id: "under25", label: "Under $25" },
    { id: "over25", label: "$25 to $50" },
    { id: "over50", label: "Over $50" },
  ],
};

export const sortOptions = [
  { id: "date-asc", label: "Date: Oldest to Newest" },
  { id: "date-desc", label: "Date: Newest to Oldest" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const typeOptionsMap = {
  social: "Social",
  arts: "Arts",
  academics: "Academics",
  career: "Career & Job Search",
  health: "Health",
  sciencetechnology: "Science & Technology",
};