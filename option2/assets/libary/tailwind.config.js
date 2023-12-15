/** @type {import('tailwindcss').Config} */
tailwind.config = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'over': '"GeorgiaBallpark Script"',
      'title': '"Montserrat"',
      'content': '"Lato"'
    },
     screens: {
      '3xl': {'max': '1599.5px'},

      '2xl': {'max': '1439.5px'},

      'xl': {'max': '1367.5px'},

      'tab-l': {'max': '1239.5px'},

      'tab-m': {'max': '991.5px'},

      'mob-max': {'max': '767.5px'},

      'mob-l': {'max': '639.5px'},

      'mob-m': {'max': '413.5px'},
    },
    colors:{
      'text-main' : '#555555',
      'text-2' : '#6487c2',
      'bg' : '#ffffff',
      'bg-2' : '#3a4146',
      'bg-3' : '#f6f6f6',
      'border' : '#dddddd',
    },
  },
  plugins: [],
}

