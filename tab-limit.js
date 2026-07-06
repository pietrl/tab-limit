async function limitNumberOfTabs(newTab) {
    numberOfTabs = await browser.tabs.query({}).then((openTabs) => openTabs.length)

    if (numberOfTabs >= 10) {
        browser.tabs.remove(newTab.id)

        browser.notifications.create({
            "title": "Tab Limit Extension",
            "message": "Your new tab has been blocked because you have reached your tab limit.",
            "type": "basic"
        })
    }
}

browser.tabs.onCreated.addListener(limitNumberOfTabs)
