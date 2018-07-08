# Town Watch

A simple library for in-browser, client-side validations where-in each validation failed will trigger one
specific error message in the DOM, as well as mark the corespunding input as invalid.

## Dependencies 

None.

## Browser compatibility

The compiled code is EcmaScript 5 and thus is compatible with all modern browsers, see [here](https://caniuse.com/#feat=es5)

## Why should I use this ?

You have to add a lot of validations on a single input (most likely a text input).

You want each validation to have it's unique message (error messages are in the DOM for whatever reason).

You want a long chain of smaller validations instead of one big and probably very complex and error prone validation.

You want to easily chain validations so that they can be added removed with minimum effort, configuration vs implementation.

You want to easily add your custom validations to the ones allready provided.

You want to avoid depencies.


## WIP

Yes, this is still a work in progress. Mostly for unit testing.

## License 

MIT

