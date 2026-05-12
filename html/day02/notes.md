# Day 02 - HTML Basics

---

# 1. HTML

## Definition

HTML stands for HyperText Markup Language.

It is used to create the structure of web pages.

HTML defines:
- Text
- Images
- Videos
- Links
- Tables
- Forms
- Layout structure

HTML is not a programming language.
It is a markup language.

---

# 2. Types of Content

HTML content is mainly divided into two categories.

---

## a. Text-Based Content

Used to display text information.

Examples:
- Headings
- Paragraphs
- Links
- Lists

Tags:
- <h1> to <h6>
- <p>
- <a>
- <li>

---

## b. Media-Based Content

Used to display media files.

Examples:
- Images
- Audio
- Video

Tags:
- <img>
- <audio>
- <video>

---

# 3. Main Tags of HTML

---

## <!DOCTYPE html>

Defines the document type.

Tells browser that the document uses HTML5.

---

## <html>

Root element of HTML document.

All HTML code is written inside this tag.

---

## <head>

Contains:
- Title
- Meta data
- CSS links
- Script links

This data is not directly visible on webpage.

---

## <title>

Defines webpage title shown in browser tab.

---

## <body>

Contains visible webpage content.

---

## Headings

<h1> to <h6>

Used for titles and subtitles.

<h1> is largest.
<h6> is smallest.

---

## <p>

Defines paragraph.

---

## <a>

Anchor tag.

Used to create hyperlinks.

---

## <img>

Used to display images.

---

## <video>

Used to display videos.

---

## <audio>

Used to play audio.

---

# 4. Target Attribute

## Definition

The target attribute specifies where the linked document should open.

Used mainly inside <a> tag.

---

## Types

### _self

Opens in same tab.

(Default behavior)

### _blank

Opens in new tab.

Example:
<a href="https://google.com" target="_blank">
Google
</a>

---

# 5. Lists in HTML

Lists are used to organize items.

---

## a. Ordered List

Uses numbers.

Tag:
<ol>

Example:
1. Apple
2. Mango

---

## b. Unordered List

Uses bullet points.

Tag:
<ul>

Example:
- Apple
- Mango

---

## c. List Item

Tag:
<li>

Used inside ol or ul.

---

# 6. Attributes

## Definition

Attributes provide additional information to HTML elements.

Attributes are written inside opening tag.

Syntax:

<tag attribute="value">

---

## Common Attributes

### href

Specifies link destination.

### src

Specifies source file.

### alt

Alternative text for image.

### width and height

Define dimensions.

### target

Defines opening location.

### class

Used for CSS styling.

### id

Unique identifier for element.

---

# 7. Media Elements

Media elements are used to display multimedia content.

---

## a. Local Media

Files stored inside project folder.

Example:
<img src="images/photo.jpg">

Folder Structure:
project/
│
├── index.html
└── images/
    └── photo.jpg

---

## b. CDN Media

Files loaded from internet links.

CDN stands for Content Delivery Network.

Example:
<img src="https://example.com/image.jpg">

Advantages:
- Faster loading
- No local storage needed
- Easy to use

---

# Important Points

- HTML creates webpage structure.
- Tags define webpage elements.
- Attributes add extra information.
- Lists organize content.
- Media elements display images, audio, and video.
- CDN resources are loaded from internet servers.