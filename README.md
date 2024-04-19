# system-deeplink

Tiny function to open application from browser.
Resolves if the application was requested to open.

```js
import { tryDeepLink } from "system-deeplink";

try {
  await tryDeepLink("music://");
  alert("installed");
} catch (error) {
  alert("not installed");
}
```
