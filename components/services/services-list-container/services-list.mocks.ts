import type {CardCommonProps} from "~components/ui";
import type {Id} from "~shared/typings";

interface MockDataServices extends CardCommonProps, Id {
}

// TypeScript need to recompile conditional type every time when complex type is called.
export const mockDataServices: ReadonlyArray<MockDataServices> = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    src: 'https://images.prismic.io/jameshome/bf2ddacc-71be-4a0e-8246-c67548d58dad_price.png'
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 2',
    src: 'https://images.prismic.io/jameshome/bf2ddacc-71be-4a0e-8246-c67548d58dad_price.png',
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Description 3',
    src: 'https://images.prismic.io/jameshome/bf2ddacc-71be-4a0e-8246-c67548d58dad_price.png'
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Description 4',
    src: 'https://images.prismic.io/jameshome/bf2ddacc-71be-4a0e-8246-c67548d58dad_price.png'
  },
];
