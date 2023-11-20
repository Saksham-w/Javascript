console.log(1)
console.log(2)
setTimeout(function () {console.log(3)}, 5000)
setTimeout(function () {console.log(4)}, 4000)
console.log(5)

// setTimeout(callback, timeInMs)
// ** Async JS **
//   - Intro
//   - What is sync and async in JS?
//     - SYNC: ekchoti ma euta kam grne ani tyo sakepaxi balla arko kam garne. Matlab, line by line code execution.
//     - ASYNC: ekaichoti multiple tasks chaldai hunxa, jun paila sakinxa, tei ko output show grne. 
//   - More on Async
//     - Kunai async code aunebittikai JS le tellai suru gardinxa ra jaba tyo process vaeyra sakinxa, tespaxi callback run gardinxa
//   - JS is synchronous or asynchronous in nature?
//     - JS afaima chai sync in nature hunxa tara ekdam fast calculation garne vako vayera async jasto behave grxa
//   - How does asynchronous code work?
//       - Concept of main stack and side stack
//       - Jaba kunai async code auxa, teslai JS le suru garera side stack ma haldinxa
//       - Ani normal code sabai lai main stack ma haldinxa
//       - JS le main stack ko code matra execture grne ho
//       - teivara usle sabai sync code matra suru ma sakauxa, jun main stack ma thyo
//       - Main stack khali vayesi matra usle side stack ma herxa
//       - If, kunai async code ko process sakiyo vane JS le side stack bata tyo code lai main stack ma lyauxa
//       - ani balla tyo code execute hunxa
//       - Ani feri side stack ma sodhxa, kei xa vane lyauxa
//       - feri same process until sabai code sakinxa
//   - Threading (Single and multi) - basic concepts
//     - Single threaded vaneko one process at a time grna sakne
//     - Multi threaded vaneko multiple process at a time grna sakne
//     - JS is single threaded
//   - Callbacks 
//     - callbacks functions nai ho
//     - yesto function jun certain time, not always fixed time, paxi run hunaprne hunxa, tei ho callback function

