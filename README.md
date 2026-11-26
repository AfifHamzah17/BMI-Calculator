# BMI Calculator

A small web page that calculates Body Mass Index from height and weight and shows which
category the result falls into.

**HTML · CSS · JavaScript — no build step, no dependencies**

---

## Features

- ⚖️ Input height and weight, get BMI instantly
- 📊 Category table (underweight / normal / overweight / obese)
- 📱 Simple, responsive layout
- 🖼️ Illustration assets for each input field

---

## Running

Open `index.html` in a browser — no server or install needed. Or serve it locally:

```bash
python -m http.server 8000
```

---

## Files

| File | Purpose |
|---|---|
| `index.html` | Page and form |
| `index.js` | BMI calculation and category logic |
| `index.css` | Styling |
| `*.png` | Icons and illustrations |

**Formula:** `BMI = weight (kg) / height (m)²`
