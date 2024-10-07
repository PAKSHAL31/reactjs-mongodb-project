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
      name: "dateTime",
      componentType: "input",
      type: "datetime-local",
      placeholder: "Select date and time",
    },
    {
        label: "Description",
        name: "description",
        componentType: "textarea",
        placeholder: "Enter event description",
      }
  ];