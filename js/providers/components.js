export async function loadComponents(options) {
    try {
        // Split URL
        var urlParts = options.url.split('/');
        var fileName = urlParts[urlParts.length - 1];
        
        // Request and module URL
        var now = new Date();
        var requestUrl = window.location.href + options.url + '/' + fileName + '.html' + '?t=' + now.getTime();
        var moduleUrl = '../../' + options.url + '/' + fileName + '.js';

        console.log("Loading component: " + requestUrl);
        let response = await fetch(requestUrl, { headers: { 'pragma': 'no-cache', 'Cache-Control': 'no-cache', 'Cache': 'no-cache' } });
        
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        let html = await response.text();
        document.getElementById(options.parent).innerHTML = html;
        
        await importModule(moduleUrl);
    } catch (error) {
        console.error("Error loading component:", error);
    }
}

// Import module
export async function importModule(moduleUrl) {
    try {
        console.log("Loading module: " + moduleUrl);
        let module = await import(moduleUrl);
        if (module.init) {
            module.init();
        } else {
            console.warn("No init function found in module:", moduleUrl);
        }
    } catch (error) {
        console.error("Error importing module:", error);
    }
}
