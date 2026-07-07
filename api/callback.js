// --- 3. RENDER UI OR REDIRECT ---
if (destination !== "") {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head>
            <link rel="stylesheet" href="/form.css">
        </head>
        <body style="background-color: #121212; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
            <div class="pane-wrapper" style="width: 80%; max-width: 600px; padding: 20px;">
                <div class="label-bar">
                    <span>Response Body Received</span>
                </div>
                <div class="controls">
                    <pre style="background: #1e1e1e; padding: 15px; border: 1px solid #333; color: #e0e0e0; border-radius: 4px; overflow-x: auto;">${JSON.stringify(data, null, 4)}</pre>
                    <a href="${destination}?${queryParams}" class="button" style="text-decoration: none; display: inline-block;">
                        Continue to Payment
                    </a>
                </div>
            </div>
        </body>
        </html>
    `);
} else {
    res.redirect(302, `/payment-status.html?${queryParams}`);
}
