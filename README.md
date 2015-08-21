# shcoffee [![](https://img.shields.io/npm/v/shcoffee.png)](https://www.npmjs.com/package/shcoffee)
> Easily use CoffeeScript for global ShellJS scripts without .coffee extension.

 
## Install

```
npm install -g shcoffee
```

## Example

Create a file with the below contents and call it "hello":

```CoffeeScript
#!/usr/bin/env shcoffee
require 'shelljs/global'
echo 'hello'
exit 1
```

Make it executable:

```
$ chmod +x hello
```

Then run it! 

```
$ ./hello
hello
```

## License

MIT
