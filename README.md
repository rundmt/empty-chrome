### empty-chrome

empty-chrome is a way to open a chrome driver version of chrome. This allows
us to open a version of chrome that is empty with no extensions or profiles.

### Advantages

A lot of times developers use extensions when using chrome. This sometimes
causes sites to render improperly.

This is better than incognito mode, because incognito mode can still run
extensions.

Instead of creating a whole new profile we can use empty-chrome to give us a
clean chrome experience.

## How to use
First you must have [chrome](https://www.google.com/chrome/browser/desktop/) installed on your computer.

```
npm install -g empty-chrome
```
NOTE: On Linux you may have to use sudo to install

To Run:
```
empty-chrome --url http://localhost
```
