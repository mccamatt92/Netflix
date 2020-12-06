import React from 'react';
import{useContent} from '../hooks/'

// import { BrowseContainer } from '../containers/browse';
// import { useContent } from '../hooks';
// import { selectionFilter } from '../utils';

export default function Browse() {
    const{series} =useContent('series')
    const{films} =useContent('films')
    console.log(series)
    console.log(films)

            return<p>Hello from the sign in page</p>
}
