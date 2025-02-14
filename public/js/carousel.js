module.exports = {
 //...
 // add daisyUI plugin
 type:"json",

 // daisyUI config (optional - here are the default values)
 daisyui: {
  themes: [], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
  darkTheme: "", // name of one of the included themes for dark mode
  base: false, // applies background color and foreground color for root element by default
  styled: false, // include daisyUI colors and design decisions for all components
  utils: false, // adds responsive and modifier utility classes
  prefix: "12", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
  logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  themeRoot: ":root", // The element that receives theme color CSS variables
 },
 plugins: [require("daisyui/components/carousel.css")],

 //...
}