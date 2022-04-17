// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import { link } from './link'
import { menus } from './menusDocument'
import { PortfolioPage } from './PortfolioPage'
import { project } from './project'
import { picture } from './picture'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'HomePage',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    PortfolioPage,
    menus,
    link,
    project,
    picture
  ]),
})
