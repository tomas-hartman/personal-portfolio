export const link = {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Href",
      name: "href",
      type: "string"
    },
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Target",
      name: "target",
      type: "string",
      options: {
        list: ["", "_blank", "_self"],
        layout: "radio"
      }
    }
  ]
}