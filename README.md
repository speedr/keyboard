# speedr-keyboard

## Install

```sh
$ npm install --save speedr-keyboard
```

## Usage

```js
import {Keyboard, Keys} from 'speedr-keyboard'

let kb = new Keyboard(window)

kb.start()
kb.isDown(Keys.SPACE) // false
kb.stop()
```

## License

MIT © Florent Cailhol
