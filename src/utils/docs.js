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
        img : {
          src:'https://www.tutorialspoint.com/html/images/html-element-structure.jpg',
          size:'370',
        }
      },
      {
        id: 4,
        title: "HTML Attributes",
        paragraph: [
          "HTML attributes are used to provide additional information about the HTML elements, attributes are the reserved keywords. We have seen few HTML tags and their usage like <h1>, <h2>, <p>, <br>, <hr> and other tags. We used them so far in their simplest form, but most of the HTML tags can also have attributes, which are extra bits of information.An attribute is used to define the characteristics of an HTML element and is placed inside the elements opening tag. All attributes are made up key & value paire.",
        ],
        img : {
          src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecwFPjzi3ebynCJc3bLVY8pLTAPltzt6cyQ&s',
          size:'370',
        }
      },
      {
        id: 5,
        title: "Heading Tag",
        paragraph: [
          "A HTML heading or HTML h tag can be defined as a title or a subtitle which you want to display on the webpage. When you place the text within the heading tags <h1>.........</h1>, it is displayed on the browser in the bold format and size of the text depends on the number of heading.There are six different HTML headings which are defined with the <h1> to <h6> tags, from highest level h1 (main heading) to the least level h6 (least important heading).h1 is the largest heading tag and h6 is the smallest one. So h1 is used for most important heading and h6 is used for least important.",
        ],
        img : {
          src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxYLTpzPsQqFnwtBPHDx28G_uOv6woc3OMxgwyOt8K_fJAoEJWkp72ZHO9vH-oedWHLcI&usqp=CAU',
          size:'370',
        }
      },
      {
        id: 6,
        title: "Paragraph Tag",
        paragraph: [
          "HTML paragraph or HTML p tag is used to define a paragraph in a webpage. Let's take a simple example to see how it work. It is a notable point that a browser itself add an empty line before and after a paragraph. An HTML <p> tag indicates starting of new paragraph.",
        ],
        img : {
          src:'https://cdo-curriculum.s3.amazonaws.com/media/uploads/html_element.png',
          size:'370',
        }
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
        img : {
          src:'https://puzzleweb.ru/en/images/css/1_1.png',
          size:'370',
        },
        paragraph: [
          "The CSS provides the style to the HTML element, which the browser interprets. After being interpreted by the browser, the CSS style property will be applied to all the elements of the HTML. We can provide style property to the HTML element in three parts. These three parts are as follows. Selector It is an HTML tag. All the style properties of the CSS will be applied to the selector. The selector tag like <h1> or <table> etc. PropertyIt is a type of attribute that is present in HTML tags. All the attributes of the HTML will be converted to the CSS properties. The CSS properties like color, border, etc. ValueIn HTML, these are assigned to the properties. For example, the color property can have a value of either red or #F1F1F1, etc.",
        ],
      },
      {
        id: 3,
        title: "Inline CSS",
        img : {
          src:'https://www.seohero.net/wp-content/uploads/2021/04/Inline-CSS-seo-hero.jpg',
          size:'370',
        },
        paragraph: [
          "We can apply CSS in a single element by inline CSS technique.The inline CSS is also a method to insert style sheets in HTML document. This method mitigates some advantages of style sheets so it is advised to use this method sparingly. If you want to use inline CSS, you should use the style attribute to the relevant tag.",
        ],
      },
      {
        id: 4,
        title: "Internal CSS",
        img : {
          src:'https://www.c-sharpcorner.com/UploadFile/e6a884/types-of-css/Images/internalcss%20code.jpg',
          size:'370',
        },
        paragraph: [
          "Internal CSS is a form of CSS using which you can add CSS to HTML documents. It helps to design the layout of a single HTML web page and change the styles of a web page within HTML code. in internal css we add style tag to head tag of html like : <style> h1{color:'red'; }</style>",
        ],
      },
      {
        id: 4,
        title: "External CSS",
        img : {
          src:'https://img.uxcel.com/practices/external-css-1621258547069/a-1672390170541-2x.jpg',
          size:'370',
        },
        paragraph: [
          "The external style sheet is generally used when you want to make changes on multiple pages. It is ideal for this condition because it facilitates you to change the look of the entire web site by changing just one file. It uses the <link> tag on every pages and the <link> tag should be put inside the head section.",
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
            paragraph:[`JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.`,`JavaScript is a single-threaded programming language that we can use for client-side or server-side development. It is a dynamically typed programming language, which means that we don’t care about variable data types while writing the JavaScript code. Also, it contains the control statements, operators, and objects like Array, Math, Data, etc.`,`JavaScript was first known as LiveScript, but Netscape changed its name to JavaScript, possibly because of the excitement being generated by Java. JavaScript made its first appearance in Netscape 2.0 in 1995 with the name LiveScript. The general-purpose core of the language has been embedded in Netscape and other web browsers.`],
        },
        {
          id: 2,
          title: "About Javascrpit",
  
          img : {
            src:'https://help.zend.com/zendstudio/current/content/javascript_sc_example.png',
            size:'370',
          },
          paragraph: [
            "JavaScript Values => The JavaScript syntax defines two types of values -: Fixed values- Variable values Fixed values are called Literals. Variable values are called Variables.JavaScript Literals The two most important syntax rules for fixed values are. Numbers are written with or without decimals. ",
          ],
        },
        {
          id: 3,
          title: "Comments",
  
          img : {
            src:'https://miro.medium.com/v2/resize:fit:960/1*KJ96kJKTZvrMZc0Ni5SkOA.jpeg',
            size:'370',
          },
          paragraph: [
            "JavaScript comments can be used to explain JavaScript code, and to make it more readable.   JavaScript comments can also be used to prevent execution, when testing alternative code.                      javascrpit have two types of comments single line   //  and multi line /*  add your commment   */ ",
          ],
        },
        {
          id: 4,
          title: "Variables",
  
          img : {
            src:'https://www.toolsqa.com/gallery/JavaScript/7%20Multiple%20variables%20in%20JavaScript.webp',
            size:'370',
          },
          paragraph: [
            "JavaScript variables are containers for storing data values. Variables can be declared using the 'var' keyword. Example : var x = 5; In the above code declaration, the value 5 has been assigned to the variable 'x'.",
          ],
        },
        {
          id: 5,
          title: "Operators",
  
          img : {
            src:'https://dotnettutorials.net/wp-content/uploads/2020/02/JavaScript-Operators.png',
            size:'370',
          },
          paragraph: [
            "JavaScript operators are special symbols used in scripts to perform operations on operands, such as arithmetic calculations, logical comparisons, or value assignments. It plays a crucial role in controlling the flow and processing of data within the language.",
          ],
        },
        {
          id: 6,
          title: "DataTypes",
  
          img : {
            src:'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_750,h_350/https://simplesnippets.tech/wp-content/uploads/2018/10/variables-and-datatypes-in-JavaScript-featured-image.jpg',
            size:'370',
          },
          paragraph: [
            "JavaScript has 7 primitive data types are -: string, number, boolean, bigint, symbol, null,undefined.",
          ],
        },
    ],
  },
];
