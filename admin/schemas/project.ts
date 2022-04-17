export const project = {
  title: "Project",
  name: "project",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Year",
      name: "year",
      type: "number"
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Previews",
      name: "previews",
      type: "array",
      of: [{type: "picture"}]
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{type: "link"}]
    },
  ]
}