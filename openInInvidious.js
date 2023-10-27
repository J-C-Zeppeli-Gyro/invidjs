// invidious.js
browser.contextMenus.create({
    id: "open-in-invidious",
    title: "Open in Invidious",
    contexts: ["link"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "open-in-invidious") {
        const invidiousURL = "https://invidious.local.jczeppeli.online/"; // Change this to your preferred Invidious instance
        const videoURL = info.linkUrl;
        const invidiousLink = `${invidiousURL}watch?v=${videoURL}`;
        browser.tabs.create({ url: invidiousLink });
    }
});
