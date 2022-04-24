import {
  createClient,
  createPreviewSubscriptionHook
} from 'next-sanity';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import createImageUrlBuilder from '@sanity/image-url';
import styles from '../styles/Home.module.css';

// import ReactTooltip from 'react-tooltip';

import { config } from './config';

if (!config.projectId) {
  throw Error(
    'The Project ID is not set. Check your environment variables.'
  );
}
export const urlFor = source =>
  createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
  createImageUrlBuilder(config).image(source);

export const usePreviewSubscription =
  createPreviewSubscriptionHook(config);

// Set up Portable Text serialization
export const PortableText = ({value}) => (
  // Serializers passed to @sanity/block-content-to-react
  // (https://github.com/sanity-io/block-content-to-react)
  <PortableTextComponent 
    value={value}
    components={{
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
      },
      block: {
        // Ex. 1: customizing common block types
        h1: ({children}) => <h1>{children}</h1>,
        // blockquote: ({children}) => <blockquote className="border-l-purple-500">{children}</blockquote>,
        
        // Ex. 2: rendering custom styles
        description: ({children}) => <p className={styles.description}>{children}</p>,
      },
      list: {
        bullet: ({children}) => <ul className={styles.ul_about}>{children}</ul>
      }
    }}
  />
);


export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false
});

export const getClient = usePreview =>
  usePreview ? previewClient : client;
export default client;
