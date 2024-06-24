import { ClassNames } from "@emotion/react";

export const myDocs = [
  {
    id: 1,
    title: "HTML",
    paragraph:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!",
    subHeading: "What is HTML?",
    topics: [
      {
        id: 1,
        title: "HTML Introduction",
        img : {
          src:"https://static.javatpoint.com/htmlpages/images/html-tutorial.png",
        },
        paragraph: [
          "HTML tutorial or HTML 5 tutorial provides basic and advanced concepts of HTML. Our HTML tutorial is developed for beginners and professionals. In our tutorial, every topic is given step-by-step so that you can learn it in a very easy way. If you are new in learning HTML, then you can learn HTML from basic to a professional level and after learning HTML with CSS and JavaScript you will be able to create your own interactive and dynamic website. But Now We will focus on HTML only in this tutorial.",
          "The major points of HTML are given below:<br/> HTML stands for HyperText Markup Languagee.HTML is used to create web pages and web applications.HTML is widely used language on the web.We can create a static website by HTML only.Technically, HTML is a Markup language rather than a programming language.",
          "<!DOCTYPE>  <html>  <head>  <title>Web page title</title>  </head>  <body>  <h1>Write Your First Heading</h1> <p>Write Your FirstParagraph.</p>  </body>  </html> .",
        ],
      },
      {
        id: 2,
        title: "HTML Tags",

        img : {
          src:'https://miro.medium.com/v2/resize:fit:740/0*m_SXOcz9tukwk51X',
          size:'370',
        },
        paragraph: [
          "HTML tags are like keywords which defines that how web browser will format and display the content. With the help of tags, a web browser can distinguish between an HTML content and a simple content. HTML tags contain three main parts: opening tag, content and closing tag. But some HTML tags are unclosed tags.",
          "When a web browser reads an HTML document, browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.",
          "An HTML file must have some essential tags so that web browser can differentiate between a simple text and HTML text. You can use as many tags you want as per your code requirement.",
          "> All HTML tags must enclosed within < > these brackets.",
          "> Every tag in HTML perform different tasks.",
          "> If you have used an open tag <tag>, then you must use a close tag </tag> (except some tags)",
        ],
      },
 
    {
        id: 3,
        title: "HTML Elements",
        paragraph: [
          "An HTML file is made of elements. These elements are responsible for creating web pages and define content in that webpage. An element in HTML usually consist of a start tag <tag name>, close tag </tag name> and content inserted between them. Technically, an element is a collection of start tag, attributes, end tag, content between them.",
        ],
      },
      {
        id: 3,
        title: "HTML Attributes",
        paragraph: [
          "HTML attributes are used to provide additional information about the HTML elements, attributes are the reserved keywords. We have seen few HTML tags and their usage like <h1>, <h2>, <p>, <br>, <hr> and other tags. We used them so far in their simplest form, but most of the HTML tags can also have attributes, which are extra bits of information.An attribute is used to define the characteristics of an HTML element and is placed inside the elements opening tag. All attributes are made up key & value paire.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "CSS",
    img: "https://static.javatpoint.com/htmlpages/images/html-tutorial.png",
    subHeading: "What is CSS?",
    topics: [
      {
        id: 1,
        title: "CSS Introduction",
        paragraph: [
          `CSS is the acronym for "Cascading Style Sheet". It's a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS helps the web developers to control the layout and other visual aspects of the web pages. CSS plays a crucial role in modern web development by providing the tools necessary to create visually appealing, accessible, and responsive websites.`,
          `CSS Versions`,
          `CSS1 (Cascading Style Sheets Level1) - The initial version of CSS, released in December 1996. CSS1 provided basic styling capabilities for HTML documents, including properties for text, colors, backgrounds, margins, and borders.`,
          `CSS2 (Cascading Style Sheets Level2) - Released in May 1998, CSS2 introduced new features such as positioning, z-index, media types, and more advanced selectors like attribute selectors and child selectors.`,

          `CSS2.1 - The version 2.1, published as a W3C Recommendation in June 2011, clarified and refined CSS2, addressing inconsistencies and ambiguities in the specification. CSS2.1 focused on improving interoperability among web browsers.
`,
          `CSS3 (Cascading Style Sheets Level 3) - CSS3 is a collection of modules that extend the capabilities of CSS. It introduces numerous new features and enhancements, including advanced selectors, multiple column layouts, animations, transformations, gradients, shadows, and more.
`,
          `CSS4 (Cascading Style Sheets Level 4) - CSS4 is an ongoing effort to extend CSS3 with new features and enhancements.`,
        ],
      },
      {
        id: 2,
        title: "CSS Syntax",
        paragraph: [
          "A CSS rule-set consists of a selector and a declaration block: The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.",
        ],
      },
      {
        id: 3,
        title: "CSS Colors",
        paragraph: [
          "Colors are specified using predefined color names, RGB, HEX, HSL, RGBA, HSLA values.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "JavaScript",
    paragraph:
      "JavaScript is the programming language of HTML and the Web. JavaScript is easy to learn.",
    subHeading: "What is JavaScript?",
    topics: [
        {
            id:1,
            title:"Introduction Of Javascript",
            paragraph:[`JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.`,`JavaScript is a single-threaded programming language that we can use for client-side or server-side development. It is a dynamically typed programming language, which means that we don’t care about variable data types while writing the JavaScript code. Also, it contains the control statements, operators, and objects like Array, Math, Data, etc.`,`JavaScript was first known as LiveScript, but Netscape changed its name to JavaScript, possibly because of the excitement being generated by Java. JavaScript made its first appearance in Netscape 2.0 in 1995 with the name LiveScript. The general-purpose core of the language has been embedded in Netscape and other web browsers.`,],
        },
    ],
  },
];
