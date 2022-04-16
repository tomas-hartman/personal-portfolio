// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'HomePage',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
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
    },
    {
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
          type: "string"
        }
      ]
    }
  ]),
})
