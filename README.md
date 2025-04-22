# 👗 Outfit Builder

A fun and interactive drag-and-drop web app that lets users create custom outfits by combining different clothing items. You can build an outfit, save it, and even add it to your cart!

![Outfit Builder Screenshot](public/preview.png)

---

## 🚀 Features

- 🖱️ **Drag & Drop Clothing**: Choose from a variety of items like tops, pants, shoes, hats, and more.
- 🎨 **Canvas Area**: Assemble your outfit on the canvas.
- 💾 **Save Outfits**: Save your favorite outfit combinations for later.
- 🛒 **Add to Cart**: Add complete outfits to your shopping cart.
- 🔄 **Reset Option**: Clear the canvas with a single click.
- ✅ **Responsive Design**: Works beautifully on both desktop and mobile.

---

## 🛠 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/dhruvjaiswal2981/outfit-builder.git
cd outfit-builder
```

### 2. Install Dependencies
Make sure you have Node.js and npm installed. Then run:

```bash
npm install
```
### 3. Run the App Locally

```bash
npm run dev
```
- This will start the app on http://localhost:3000.

## 📁 Project Structure

```bash
outfit-builder/
    │
    ├── public/                # Contains images and assets
    │   └── icons/             # Clothing item icons (tshirt, pants, hat, etc.)
    │
    ├── app/                   # Main app logic
    │   └── page.js            # App entrypoint with DnD logic
    │
    ├── globals.css/                # (Optional) TailwindCSS or custom styles
    │
    ├── package.json           # Project metadata and scripts
    └── README.md              # Project instructions and overview
```

## 📦 Dependencies

- Next.js - Framework
- React DnD - Drag and Drop functionality
- Tailwind CSS - For styling
- React - UI library

## 📝 Additional Instructions
- Make sure the image paths under /public/icons/ match the ones in the code (/icons/tshirt.png, /icons/pants.png, etc.).

- You can customize or add more clothing items by editing the ITEMS array.

## 🚀 Deployment

- Frontend Deployment
    - Live Demo: The application is hosted on Vercel.
    - Access it here: 

## Live Demo

- Demo Video Link : https://drive.google.com/file/d/1JDrH4F1s8Cc3tr0Pu72Ctd-WefFBYYh_/view?usp=sharing

## 📌 Author
- 💻 Developed by Dhruv Jaiswal
- 🚀 Happy Coding! 🎉
