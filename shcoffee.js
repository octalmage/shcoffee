#!/usr/bin/env node

require('shelljs/global');

if (process.argv.length < 3)
{
	console.log('shcoffee: missing argument (script name)');
	console.log();
	process.exit(1);
}

var args;
var scriptName = process.argv[2];

env['NODE_PATH'] = __dirname + '/..';

if (!scriptName.match(/\.js/) && !scriptName.match(/\.coffee/))
{
	if (test('-f', scriptName + '.js'))
		scriptName += '.js';
	if (test('-f', scriptName + '.coffee'))
		scriptName += '.coffee';
}

if (!test('-f', scriptName))
{
	console.log('shcoffee: script not found (' + scriptName + ')');
	console.log();
	process.exit(1);
}

args = process.argv.slice(3);

for (var i = 0, l = args.length; i < l; i++)
{
	if (args[i][0] !== "-")
	{
		args[i] = '"' + args[i] + '"'; // fixes arguments with multiple words
	}
}

exec('coffee ' + scriptName + ' ' + args.join(' '),
{
	async: true
});