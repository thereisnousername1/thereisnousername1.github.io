---
layout: default
title: Andy Iu's Secret Kingdom
---

<style>
body {
  background: #181622;
  color: #f3f3f3;
  font-family: 'Segoe UI', 'Comic Sans MS', 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}
.comic-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
}
.comic-box {
  background: #23203a;
  border: 3px solid #a259e6;
  border-radius: 18px;
  box-shadow: 0 6px 24px rgba(80,0,120,0.18);
  padding: 2rem 1.5rem;
  min-width: 260px;
  max-width: 340px;
  flex: 1 1 300px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  position: relative;
}
.comic-box:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 12px 32px rgba(162,89,230,0.25);
  border-color: #f3f3f3;
}
.comic-title {
  font-size: 2.2rem;
  font-weight: bold;
  color: #a259e6;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}
.comic-tagline {
  font-size: 1.1rem;
  color: #f3f3f3;
  margin-bottom: 1.5rem;
  font-style: italic;
}
.comic-link {
  color: #a259e6;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.2s;
}
.comic-link:hover {
  color: #fff;
  text-decoration: underline;
}
.comic-socials {
  margin-top: 1.2rem;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
}
.comic-socials a {
  color: #a259e6;
  font-size: 1.3rem;
  text-decoration: none;
  transition: color 0.2s;
}
.comic-socials a:hover {
  color: #fff;
}
.comic-featured {
  background: linear-gradient(135deg, #a259e6 0%, #23203a 100%);
  border: 3px solid #fff;
  color: #fff;
  box-shadow: 0 8px 32px rgba(162,89,230,0.25);
}
.comic-featured h2 {
  color: #fff;
}
.comic-mystery {
  background: repeating-linear-gradient(135deg, #23203a, #23203a 20px, #a259e6 22px, #23203a 24px);
  border: 3px dashed #a259e6;
  color: #fff;
  text-align: center;
  font-style: italic;
}
@media (max-width: 900px) {
  .comic-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>

<div class="comic-title">Andy Iu's Secret Kingdom</div>
<div class="comic-tagline">Supreme Student &mdash; Enter if you dare (or if you just like cool games and mysterious people)</div>

<div class="comic-container">
  <!-- Featured Project -->
  <div class="comic-box comic-featured">
    <h2>🎮 From Healthy to Zombie (VR)</h2>
    <p>A VR game that exhaust you!<br>
    <a class="comic-link" href="https://thereisnousername1.itch.io/from-healthy-to-zombie" target="_blank">Play on Oculus Quest 2</a></p>
  </div>

  <!-- Projects -->
  <div class="comic-box" onclick="window.location.href='projects.html'">
    <h2>🗂️ Projects</h2>
    <p>Explore my collection of game projects, prototypes, and experiments. Some are fun, some are weird, all are uniquely Andy.</p>
    <a class="comic-link" href="projects.html">See Projects</a>
  </div>

  <!-- About -->
  <div class="comic-box" onclick="window.location.href='about.html'">
    <h2>🤔 About</h2>
    <p>Who is Andy Iu? Supreme student, comic box enthusiast, and a bit of a mystery. If you want to define me, you'll have to try harder (or chat with ChatGPT for clues).</p>
    <a class="comic-link" href="about.html">Learn More</a>
  </div>

  <!-- Contact -->
  <div class="comic-box" onclick="window.location.href='mailto:umtrfkr@gmail.com'">
    <h2>📬 Contact</h2>
    <p>Want to collaborate, chat, or send me cool stationery? Drop me a line!</p>
    <div class="comic-socials">
      <a href="mailto:umtrfkr@gmail.com" title="Email">📧</a>
      <a href="https://github.com/thereisnousername1" target="_blank" title="GitHub">🐙</a>
      <a href="https://www.linkedin.com/in/andy-iu-349a3a348" target="_blank" title="LinkedIn">💼</a>
    </div>
  </div>

  <!-- Mystery Box -->
  <div class="comic-box comic-mystery" onclick="alert('The mystery deepens... Try chatting with ChatGPT to define Andy!')">
    <h2>❓ Mystery Box</h2>
    <p>Can you define Andy Iu? Click here for a surprise, or just start a conversation. The adventure is yours!</p>
  </div>
</div> 

[Link to my GitHub](https://github.com/thereisnousername1).



<!-- Text can be **bold**, _italic_, ~~strikethrough~~ or `keyword`.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
``` -->
