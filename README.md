# node-assessment-part3
This is for unit 34 - assessment using NodeJS &amp; Express

Part 3: Broken App!
Yay! You got a job as an Express developer!

Boo! The last developer left in a hurry, and left a mess.

You’ve been given a non-working small app, broken-app. It should have one route:

POST /
Given a list of GitHub users names, this should return information about those developers.

Should get JSON body like {developers: [username, ...]}

Should return [ {name, bio}, ... ]

For example, if we POST:

{ "developers": ["joelburton", "elie"] }
to /, it should return:

[
  {
    "bio": "Open source developer. Former dev at Apple...",
    "name": "Joel Burton"
  },
  {
    "bio": "Co-founder + Lead Instructor @rithmschool ",
    "name": "Elie Schoppik"
  }
]
The order of the output array does not matter.

Fix It!
Most of the script is written and working. There’s a least one bug in it, though, so it doesn’t work now.
