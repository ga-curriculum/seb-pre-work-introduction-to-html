<textarea id="source">

<h1 class="slide-header">Introduction to HTML</h1>

<span id=time-estimate class="color-grey-500">20 mins</span>

<p id="lesson-description">
  To the uninitiated, HTML can look like a jumble of brackets, words, and numbers. But over the course of this unit, its meaning will become clear. Let’s start at the beginning: why it exists and what it really does.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

The Origins of HTML

<hr>

HTML Tags

<hr>

HTML Boilerplate

<hr>

<a href="https://ga-waite.s3.amazonaws.com/production/sanitized-pdfs/introduction-to-html-2.pdf" target="_blank" download="introduction_to_html_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Explain how HTML is used to develop websites.</li>
  <li>Set up a boilerplate HTML file.</li>
  <li>Use HTML tags to structure a website.</li>
</ul>

---

<h1 class="slide-header">A Brief History of the Web</h1>
<!--
  WISTIA EXAMPLE. REPLACE 11dit621rx with the id
-->
<div class="wistia_embed wistia_async_11dit621rx wistia_embed_initialized" id="wistia-11dit621rx-1"
    style="width: 100%; height: 50%;">
    <div id="wistia_chrome_23" class="w-chrome notranslate" tabindex="-1">
        <div id="wistia_grid_57_wrapper" style="display: block; width: 630px; height: 354.375px;">
            <div id="wistia_grid_57_above" style="height: 0px; font-size: 0px; line-height: 0px;"> </div>
            <div id="wistia_grid_57_main" style="width: 630px; left: 0px; height: 354.375px; margin-top: 0px;">
                <div id="wistia_grid_57_center" style="width: 100%; height: 100%;">
                    <div class="w-video-wrapper w-css-reset"
                        style="height: 100%; position: absolute; top: 0px; width: 100%; opacity: 1;">
                        <video id="wistia_simple_video_135" crossorigin="anonymous"
                            poster="https://fast.wistia.com/assets/images/blank.gif" aria-label="Video"
                            controlslist="nodownload" playsinline="" preload="auto" type="video/m3u8"
                            x-webkit-airplay="allow"
                            style="background: transparent; display: block; height: 100%; max-height: none; max-width: none; position: static; visibility: visible; width: 100%; object-fit: contain;"></video>
                    </div>
                    <div class="w-ui-container"
                        style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; opacity: 1;">
                        <div class="w-vulcan-v2 w-css-reset" id="w-vulcan-v2-56"
                            style="border-radius: 0px; box-sizing: border-box; cursor: default; direction: ltr; height: 100%; left: 0px; position: absolute; visibility: visible; top: 0px; width: 100%;">
                            <div class="w-vulcan--background w-css-reset"
                                style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;">
                                <div class="w-css-reset" data-handle="statusBar"></div>
                                <div class="w-css-reset" data-handle="backgroundFocus"><button
                                        aria-label="Play Video: A Brief History of the Web"
                                        class="w-css-reset w-vulcan-v2-button" tabindex="0"
                                        style="width: 0px; height: 0px; pointer-events: none;"></button></div>
                            </div>
                            <div aria-live="polite" class="w-vulcan--aria-live w-css-reset" aria-atomic="true"
                                style="position: absolute; left: -99999em;"></div>
                            <div class="w-vulcan-overlays-table w-css-reset"
                                style="display: table; pointer-events: none; position: absolute; width: 100%;">
                                <div class="w-vulcan-overlays--left w-css-reset"
                                    style="display: table-cell; vertical-align: top; position: relative; width: 0px;">
                                    <div class="w-css-reset" style="height: 321.375px;"></div>
                                </div>
                                <div class="w-vulcan-overlays--center w-css-reset"
                                    style="display: table-cell; vertical-align: top; position: relative; width: 100%;">
                                    <div class="w-css-reset" style="height: 321.375px;">
                                        <div class="w-css-reset" data-handle="bigPlayButton"
                                            style="pointer-events: auto;">
                                            <div class="w-bpb-wrapper w-css-reset w-css-reset-tree"
                                                style="border-radius: 0px; display: none; left: calc(50%); margin-left: -61.5234px; margin-top: -39.375px; overflow: hidden; position: absolute; top: calc(50% + 0px);">
                                                <button
                                                    class="w-big-play-button w-css-reset-button-important w-vulcan-v2-button"
                                                    tabindex="0" type="button"
                                                    style="cursor: pointer; height: 78.75px; box-shadow: none; width: 123.047px;">
                                                    <div
                                                        style="background: rgb(1, 121, 145); display: block; left: 0px; height: 78.75px; mix-blend-mode: darken; position: absolute; top: 0px; width: 123.047px;">
                                                    </div>
                                                    <div
                                                        style="background-color: rgba(1, 121, 145, 0.7); height: 78.75px; left: 0px; position: absolute; top: 0px; transition: background-color 150ms ease 0s; width: 123.047px;">
                                                    </div><svg x="0px" y="0px" viewBox="0 0 125 80"
                                                        enable-background="new 0 0 125 80" aria-hidden="true" alt=""
                                                        style="fill: rgb(255, 255, 255); height: 78.75px; left: 0px; stroke-width: 0px; top: 0px; width: 100%; position: absolute;">
                                                        <rect fill-rule="evenodd" clip-rule="evenodd" fill="none"
                                                            width="125" height="80"></rect>
                                                        <polygon fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF"
                                                            points="53,22 53,58 79,40">
                                                        </polygon>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="w-css-reset" data-handle="clickForSoundButton"
                                            style="pointer-events: auto;">
                                            <div class="w-css-reset w-css-reset-tree"
                                                data-handle="click-for-sound-backdrop"
                                                style="display: none; height: 100%; left: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%;">
                                                <button aria-label="Click for sound"
                                                    class="w-vulcan-v2-button click-for-sound-btn"
                                                    style="background: rgba(0, 0, 0, 0.8); border: 2px solid transparent; border-radius: 60px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; outline: none; pointer-events: auto; position: absolute; right: 20.1484px; top: 20.1484px; max-width: 589.703px;">
                                                    <div
                                                        style="display: flex; align-items: center; justify-content: flex-end; white-space: nowrap; overflow: hidden; max-width: 0px; transition: max-width 200ms ease 0s;">
                                                        <span
                                                            style="color: rgb(255, 255, 255); font-family: WistiaPlayerInter, Helvetica, sans-serif; font-size: 15px; font-weight: 500; padding-left: 1em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 630px;">Click
                                                            for sound</span>
                                                    </div><svg viewBox="0 0 237 237" width="51.6796875"
                                                        height="51.6796875"></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- YOUTUBE -->
<!-- VIMEO -->
<details>
  <summary>Transcript</summary>
  
  <p class="transcript-text">
    The early history of the World Wide Web is a bit cloudy, but it goes something like this: 

    The year is 1990. The place is a particle physics facility in a suburb of Geneva, Switzerland.
    
    A physicist, Tim Berners-Lee, is feeling disgruntled. He’s tired of logging on to so many different computers to get the information he needs.
    
    There has to be a better way! 
    
    “What if I came up with a computer language that would allow people to alter text so that it could be sent over a network? Then any computer connected to that network could interpret the text and make it readable for the user. Now, that would be something!”
    
    Berners-Lee came up with a brief set of text tags that computers could interpret, send over a network, and render into readable form — and HTML, or Hypertext Markup Language, was born.
    
    The language is so easy to learn and use that it flourished. More people got involved; more tags were created and added. HTML was here to stay. 
    
    But its capabilities were limited, and people wanted this new World Wide Web to be sexy and cool. So, other languages were created and paired with HTML; languages that enabled styling and automation, animation, and interactivity.
    
    The web and its primary authoring tool, HTML, will continue to evolve and improve. But despite these ongoing changes, HTML is still a simple, text-based computer language that, with a little practice, anyone can learn.
  </p>
</details>

---

<h1 class="slide-header">Your First Job</h1>

<p>In the video, you learned that HTML stands for "Hypertext Markup Language." So what's *hypertext*?  Simply put, it's text that's not designed to be linear. We've all seen links on a website that go to other pages or even other sites—this is the non-linearity of HTML!

  As we explore HTML, you’ll be diving in and getting your hands dirty. You’ll practice what you learn and develop a website in the process. Exciting stuff!
  
  At this point you might be wondering, “What website?” 
  
  Your roommate Zelda dabbles in web design and has been building a website for her heavy metal band. She’s not too happy with how it’s turned out, and neither are you. It needs a good dose of personality. And “Mega Beast”? What a generic band name. What about something more unique, like... “Kasserole”?
  
  <img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/mega-beast.png" alt="heavy-metal-album-image">
</p>


---

<h1 class="slide-header">First Things First</h1>

<p>
Zelda loves your idea for the band name so much that she’s handing over the reins of the site. She wants you to give it a total overhaul.

Are you ready for this?

In the lessons that follow, we’ll walk you through the basics of HTML. You’ll learn how to create an HTML file, add text of various sizes and configurations, and insert hyperlinks and images.

Let’s start with the basics — a template that makes it easy to get up and running and organize elements. This is known as the **HTML boilerplate**.
</p>

---

<h1 class="slide-header">The HTML Boilerplate</h1>

<p>
Here’s an example of an HTML boilerplate. It should be inserted at the beginning of any HTML document to let browsers know that what follows is, well, HTML:
</p>

```html
<!DOCTYPE html>
<html>
  <head>
    <title> </title>
  </head>
  <body>
  </body>
</html>
```
<p>
Let’s examine each of these lines more closely to find out what they do.
</p>

---
<h1></h1>
<h2 class='slide-header'>`<html>`</h2>

The `<html>` tag begins your HTML document. It says, “Everything between my _opening_ tag (`<html>`) and my _closing_ tag  (`</html>`) will be part of the following HTML-based instructions.”

```html
<!DOCTYPE html>
**<html>**
  <head>
   <title> </title>
  </head>

<body>
</body>

**</html>**
```

---

<h1 class="slide-header">Code Challenge</h1>

<iframe height="500" style="width: 100%;" scrolling="no" title="Code Challenge Test" src="https://codepen.io/Ryan-Brodsky/embed/VwNwXqq?default-tab=html%2Cresult&editable=true" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/Ryan-Brodsky/pen/VwNwXqq">
    Code Challenge Test</a> by Ryan Brodsky (<a href="https://codepen.io/Ryan-Brodsky">@Ryan-Brodsky</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>

---

<h1 class="slide-header">Multiple Choice Question</h1>

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" correct="true"/><label for="track">Correct Answer</label><br />
  <input type="radio" name="action" id="event" value="event"  /><label for="event">Incorrect</label><br />
  <input type="radio" name="action" id="message" value="message" /><label for="message">Incorrect</label><br />
</fieldset>
<button class="ant-btn ant-btn-primary multiple-choice-radio-submit">Submit Answer</button>

<fieldset>
  <legend>Please select all that apply</legend>
  <input type="checkbox" id="uniqueAnswer" name="unique" correct="true"/><label for="uniqueAnswer">Correct Answer</label><br />
  <input type="checkbox" id="uniqueAnswer2" name="unique2" /><label for="uniqueAnswer2">Incorrect Answer</label><br />
  <input type="checkbox" id="uniqueAnswer3" name="unique3" correct="true"/><label for="uniqueAnswer3">Correct Answer</label><br />
</fieldset>

<button class="ant-btn ant-btn-primary multiple-choice-checkbox-submit">Submit Answer</button>

---

<h1 class="slide-header">Cards Slide</h1>

<details>
  <summary>Vocabulary Term</summary>
  
  <p class="transcript-text">
    Definition when "flipped" by the student
  </p>
</details>

<details>
  <summary>Vocabulary Term</summary>
  
  <p class="transcript-text">
    Definition when "flipped" by the student
  </p>
</details>

---

<h1 class="slide-header">Conclusion</h1>

</textarea>
{::nomarkdown}
  <button id="next-button" aria-label="next"><span role="img" title="Next" class="anticon"><svg viewBox="0 0 16 16"
        width="2em" height="2em" fill="currentColor" aria-hidden="true" focusable="false" class="">
        <path d="M9.3 1.3L7.9 2.7 12.2 7H0v2h12.2l-4.3 4.3 1.4 1.4L16 8z">
        </path>
  </svg></span></button>
  <button id="previous-button" aria-label="previous"><span role="img" title="Previous" class="anticon"><svg
        viewBox="0 0 16 16" width="2em" height="2em" fill="currentColor" aria-hidden="true" focusable="false" class="">
        <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
  </svg></span></button>
{:/nomarkdown}