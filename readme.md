# 🖼️ 404 Museum

> "Where broken links become beautiful."

Welcome to the **404 Museum** — a virtual gallery that curates and celebrates the most creative, hilarious, and artistic **404 error pages** from across the web.  
Instead of frustration, we bring *fun*, *flair*, and *design excellence* to the moment you realize you’ve clicked into the void.

## ✨ Features

- 🎨 **Virtual Gallery Rooms** — Browse categorized exhibits like *Funny*, *Retro*, *Modern*, and *Artistic* 404 pages.
- 📂 **Open Source JSON Database** — All entries are loaded from a flat-file `entries.json`. Easy to edit, extend, and collaborate.
- 🔍 **Search & Filter** — Quickly find the type of 404 experience you're in the mood for.
- 💾 **No Backend Required** — Fully static, works directly from GitHub Pages.
- 🖼️ **Screenshot Previews** — Each entry displays a preview so users can experience it without leaving the page.
- 📬 **Community Submissions** — Visitors can contribute new 404 pages via Pull Request.
- 📉 **Lightweight & Fast** — Optimized for quick loading, even on slow connections.
- 😎 **Custom 404 Page** — The site itself has a custom 404 page… of course it does.

---

## 🧰 Tech Stack

| Layer         | Technology Used                | Why It's Used                                  |
|---------------|--------------------------------|------------------------------------------------|
| Structure     | `HTML5`                        | Markup for the static pages                    |
| Styling       | `CSS3`                         | Gallery design, layout, and animations         |
| Behavior      | `JavaScript (Vanilla)`         | Dynamic rendering, filtering, UI interactivity|
| Data          | `JSON`                         | Storing 404 page entries                       |
| Hosting       | `GitHub Pages`                 | Free static site hosting                       |
| Versioning    | `Git + GitHub`                 | Open-source contribution & version control     |

> ✅ No build tools, frameworks, or dependencies required.

---

## 📝 How to Add a 404 Page to the Museum

Want to contribute a creative 404 page? Follow these steps:

### 1. Take a Screenshot
- Visit the 404 page you want to add.
- Take a screenshot (PNG or JPG, 16:9 ratio preferred).
- Save it in the `screenshots/` folder (e.g., `screenshots/my-cool-404.png`).

### 2. Add an Entry to `entries.json`
Open `entries.json` and add a new object with these fields:

```
{
  "title": "Name of the 404 Page or Website",
  "url": "https://example.com/404",
  "category": "Artistic", // or Funny, Retro, Modern, etc.
  "screenshot": "screenshots/my-cool-404.png",
  "description": "Short description of what makes this 404 page interesting."
}
```

**Fields:**
- `title`: Name of the 404 page or website
- `url`: Direct link to the 404 page
- `category`: Choose a category (e.g., Artistic, Funny, Retro, Modern)
- `screenshot`: Path to your screenshot file
- `description`: Brief description

### 3. Submit Your Contribution
- Commit your changes
- Open a Pull Request on GitHub
- All submissions are reviewed for quality and accuracy

---
