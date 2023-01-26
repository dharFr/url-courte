# url-courte

My own super simple algorithmically reversible, personal URL shortener.

[![npm](https://img.shields.io/npm/v/@dhar/url-courte.svg)](https://www.npmjs.com/package/@dhar/url-courte)  [![npm](https://img.shields.io/npm/l/@dhar/url-courte.svg)](https://github.com/dharFr/url-courte/blob/main/LICENSE)

Inpired by :
 - [Whistle](http://tantek.pbworks.com/w/page/21743973/Whistle) 
 - https://indieweb.org/permashortlink
 - https://www.npmjs.com/package/whistler


## Installation

```
npm install @dhar/url-courte
```

## Usage

### `shorten(date, category, ordinal)`

Converts a published date, category, and ordinal into a _url-courte_ URL fragment.

``` js
import { shorten } from '@dhar/url-courte'

const d = new Date('2023-02-03')
const shortenedFragment = shorten('articles', d, 1)
// --> returns 'a202302031'
```

#### parameters

 - `category`: named category, typically something like 'articles', 'notes', 'pictures', or anything that make sense on your website/blog
 - `date`: A JS Date object, typically the publication date.
 - `ordinal`: a digit to indicate the nth ordinal post of that type for that day

### `expand(fragment, [categoryMapping])`

Converts a shortened URL fragment (i.e. 'a202301082') into an expanded _url-courte_ URL fragment (i.e. 'articles/2023/01/08/2').
Return an empty string if the provided fragment doesn't match the expected format.

``` js
import { expand } from '@dhar/url-courte'

const d = new Date('2023-02-03')
const expandedFragment = expand('a202301182', {
	'a': 'articles',
	'n': 'notes',
})
// --> returns 'articles/2023/01/18/2'
```

#### parameters

 - `fragment`: the short URL fragment to expand
 - `categoryMapping` (optional): A mapping to match the first letter of the fragment. If ommitted, the single letter from the fragment is used.



