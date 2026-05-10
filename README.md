# Sarah Birthday Website

This is a polished static birthday website for Sarah, also called Sasosktty, made by Omar Gado. It uses plain HTML, CSS, and JavaScript, so it works on desktop and phone browsers and can be published with GitHub Pages.

## Photos

The 14 birthday photos are connected to the website as `assets/sarah-01.jpeg` through `assets/sarah-14.jpeg`. The original WhatsApp files are still in the folder too, but the website uses the cleaner `sarah-*` filenames.

## Edit The Text

Open `index.html` in Visual Studio Code if you want to change any message. Good places to personalize first:

- `Happy Birthday, Sarah`
- The hero paragraph near the top
- The letter section under `My birthday letter`
- The gallery captions inside each `figcaption`

## Open It In Visual Studio Code

1. Open this folder in Visual Studio Code.
2. Install the VS Code extension named `Live Server`.
3. Right-click `index.html`.
4. Choose `Open with Live Server`.

## Open It On Your Phone

1. Make sure your phone and computer are on the same Wi-Fi.
2. Start the site with Live Server in VS Code.
3. In PowerShell, run:

```powershell
ipconfig
```

4. Find your `IPv4 Address`, usually something like `192.168.1.25`.
5. On your phone browser, open:

```text
http://YOUR-IP-ADDRESS:5500
```

Example:

```text
http://192.168.1.25:5500
```

If it does not open, check that Windows Firewall allows VS Code or Live Server on private networks.

## Publish It On GitHub Pages

This folder is ready for GitHub Pages because `index.html` is in the root and `.nojekyll` is included.

If you do not have Git installed, use the GitHub website:

1. Go to GitHub and create a new public repository.
2. Click `Add file`, then `Upload files`.
3. Drag all files and the `assets` folder into GitHub.
4. Commit the upload.
5. Open the repository `Settings`.
6. Go to `Pages`.
7. Under `Build and deployment`, choose `Deploy from a branch`.
8. Choose the `main` branch and `/root`, then save.
9. Wait a minute, then GitHub will show your live website link.

Important: a public GitHub Pages site means the photos are public to anyone with the link.
