export const myDocs = [
    {
        id: 1,
        title: "HTML",
        topic:[
            {
                id: 1,
                title: "Html Intro Tags ",
                subheading: 'Heading tags ',
                codeExample : `<h1>HTML DIV Example</h1>
Lorem Ipsum <div>I am a div</div>
 dolor sit  amet
 <p>The yellow background is added to demonstrat
 the footprint of the DIV element.</p>`  
            },
            {
                id: 2,
                title: "paragraph tags",
                subheading: 'Paragraph tags ',
                codeExample : `<p>
This paragraph
contains a lot of lines
in the source code,
but the browser
ignores it.
</p>

<p>
This paragraph
contains         a lot of spaces
in the source         code,
but the        browser
ignores it.
</p>`  
            },
            {
                id: 3,
                title: "Image Tags ",
                subheading: 'Image Tags ',
                codeExample : `<h2>HTML Image Example</h2>  
<img src="https://ik.imagekit.io/taw2awb5ntf/wp-content/uploads/2022/03/picture-html-tag.png" alt="Good Morning Friends"/>  `  
            },
            {
                id: 4,
                title: "Table Tags ",
                subheading: 'Table Tags ',
                codeExample : `<table>  
<tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>  
<tr><td>rohit</td><td>singh</td><td>60</td></tr>  
<tr><td>aman</td><td>rawat</td><td>80</td></tr>  
<tr><td>Swati</td><td>Sironi</td><td>82</td></tr>  
<tr><td>priya</td><td>Singh</td><td>72</td></tr>  
</table>    `  
            },
            {
                id: 5,
                title: "List Tags ",
                subheading: 'List Tags ',
                codeExample : ` <ol>  
 <li>Aries</li>  
 <li>Bingo</li>  
 <li>Leo</li>  
 <li>Oracle</li>  
</ol> `  
            },
        ]
    },
    {
        id: 2,
        title: "CSS",
        topic:[
            {
                id: 1,
                title: "CSS intro",
                subheading: 'Normal Syntax',
                codeExample : `<html>
<head>
<style>
p {
  color: red;
  text-align: center;
  background-color: lightblue;
} 
</style>
</head>
<body>

<h1>Hello World</h1>
<p>Lorem ipsum...</p>

</body>
</html>`

            },
            {
                id: 2,
                title: "CSS Color",
                subheading: 'CSS Color ',
                codeExample : `<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>`
            },
            {
                id: 3,
                title: "CSS Background ",
                subheading: 'CSS Background ',
                codeExample : `<html>
<head>
<style>
p {
  color: red;
  text-align: center;
  background-color: lightblue;
} 
</style>
</head>
<body>

<p>Hello World!</p>
<p>These paragraphs are styled with CSS.</p>

</body>
</html>`
            },
            {
                id: 4,
                title: "CSS Border",
                subheading: 'CSS Border',
                codeExample : `
<html>
<head>
<style>
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
</style>
</head>
<body>

<h2>The border-style Property</h2>
<p>This property specifies what kind of border to display:</p>

<p class="dotted">A dotted border.</p>
<p class="dashed">A dashed border.</p>
<p class="solid">A solid border.</p>

</body>
</html>
`
            },
            {
                id: 5,
                title: "CSS Mragin",
                subheading: 'CSS Margin',
                codeExample : `<html>
<head>
<style>
div {
  border: 1px solid black;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
  background-color: lightblue;
}
</style>
</head>
<body>

<h2>Using individual margin properties</h2>

<div>This div element has a top margin of 100px, a right margin of 150px, a bottom margin of 100px, and a left margin of 80px.</div>

</body>
</html`
            },
        ]
    },
    {
        id: 3,
        title: "JAVASCRIPT ",
        topic:[
            {
                id: 1,
                title: "statement",
                subheading: 'Statemants',
                codeExample : `<html>
<body>

<h2>JavaScript Statements</h2>

<p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>

<p id="demo"></p>

<script>
let x, y, z;
x = 5;      
y = 6;      
z = x + y; 

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";  
</script>

</body>
</html>`
            },
            {
                id: 2,
                title: " Syntax",
                subheading: 'let & var',
                codeExample : `<html>
<body>

<h2>JavaScript Numbers</h2>

<p>Number can be written with or without decimals.</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 10.50;
</script>

</body>
</html>`
            },
            {
                id: 3,
                title: "Variable",
                subheading: 'let & var variable',
                codeExample : `<html>
<body>
<h1>JavaScript Variables</h1>

<p>In this example, x, y, and z are variables.</p>

<p id="demo"></p>

<script>
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML =
"The value of z is: " + z;
</script>

</body>
</html>`
            },
            {
                id: 4,
                title: "const variable",
                subheading: 'Const',
                codeExample : `<html>
<body>

<h2>JavaScript const</h2>

<p id="demo"></p>

<script>
try {
  const PI = 3;
  // we can declare const only once with same name so you cannot declare it again
  PI = 3.14;
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}
</script>

</body>
</html>`
            },
            {
                id: 5,
                title: "Operators",
                subheading: 'operators',
                codeExample : `<html>
<body>

<h1>JavaScript Operators</h1>
<h2>The Assignment (=) Operator</h2>

<p id="demo"></p>

<script>
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z
let z = x + y;
// Display z
document.getElementById("demo").innerHTML = "The sum of x + y is: " + z;
</script>

</body>
</html>
`
            },
            {
                id: 6,
                title: "DataTypes",
                subheading: 'DataTypes',
                codeExample : `<html>
<body>

<h2>JavaScript Data Types</h2>

<p>JavaScript has dynamic types. This means that the same variable can be used to hold different data types:</p>

<p id="demo"></p>

<script>
let x;         // Now x is undefined
x = 5;         // Now x is a Number
x = "John";    // Now x is a String

document.getElementById("demo").innerHTML = x;
</script>

</body>
</html>`
            },
            {
                id: 6,
                title: "Functions",
                subheading: 'Functions',
                codeExample : `<html>
<body>
<h1>JavaScript Functions</h1>

<p>Call a function which performs a calculation and returns the result:</p>

<p id="demo"></p>

<script>
function myFunction(p1, p2) {
  return p1 * p2;
}

let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = result;
</script>

</body>
</html>`
            },

        ]
    }
]