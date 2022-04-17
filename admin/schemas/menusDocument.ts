export const menus = {
  title: "Menus",
  name: "menus",
  type: "document",
  fields: [
    {
      title: "Main menu",
      name: "mainMenu",
      type: "array",
      of: [{type: "link"}],
    }
  ]
}