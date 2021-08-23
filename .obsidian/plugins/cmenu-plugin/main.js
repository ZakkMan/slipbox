/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const DEFAULT_SETTINGS = {
    mySetting: "default",
};
function selfDestruct() {
    let cMenuModalBar = document.getElementById("cMenuModalBar");
    if (cMenuModalBar) {
        if (cMenuModalBar.firstChild) {
            cMenuModalBar.removeChild(cMenuModalBar.firstChild);
        }
        cMenuModalBar.remove();
    }
}
function cMenuPopover(app) {
    function createMenu() {
        const applyCommand = (prefix, selectedText, suffix) => {
            suffix = suffix || prefix;
            return `${prefix}${selectedText}${suffix}`;
        };
        const commandsMap = {
            bold: (selectedText) => applyCommand("**", selectedText, ""),
            italic: (selectedText) => applyCommand("_", selectedText, ""),
            strikethrough: (selectedText) => applyCommand("~~", selectedText, ""),
            underline: (selectedText) => applyCommand("<u>", selectedText, "</u>"),
            superscript: (selectedText) => applyCommand("<sup>", selectedText, "</sup>"),
            subscript: (selectedText) => applyCommand("<sub>", selectedText, "</sub>"),
            inlinecode: (selectedText) => applyCommand("`", selectedText, ""),
            codeblock: (selectedText) => applyCommand("\n```\n", selectedText, "\n```\n"),
            quote: (selectedText) => applyCommand("\n> ", selectedText, "\n\n"),
        };
        const iconsMap = {
            "codeblock-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Code Block</title><path fill="none" stroke="currentColor" stroke-width="2" d="M9 22l6-20m2 15l5-5l-5-5M7 17l-5-5l5-5"/></svg>`,
            "quote-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Quote</title><path d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"/></svg>`,
            "bold-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Bold</title><path d="M8 11h4.5a2.5 2.5 0 1 0 0-5H8v5zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.498 4.498 0 0 1 18 15.5zM8 13v5h5.5a2.5 2.5 0 1 0 0-5H8z"/></svg>`,
            "italic-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><title>Italic</title><path d="M798 160H366c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h181.2l-156 544H229c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8H474.4l156-544H798c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"/></svg>`,
            "underline-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><title>Underline</title><path d="M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6zm-312-76c69.4 0 134.6-27.1 183.8-76.2C745 602.7 772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8C377.3 701 442.6 728 512 728z"/></svg>`,
            "strikethrough-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Strikethrough</title><path d="M20 11h-8c-4 0-4-1.816-4-2.5C8 7.882 8 6 12 6c2.8 0 2.99 1.678 3 2.014L16 8h1c0-1.384-1.045-4-5-4c-5.416 0-6 3.147-6 4.5c0 .728.148 1.667.736 2.5H4v2h16v-2zm-8 7c-3.793 0-3.99-1.815-4-2H6c0 .04.069 4 6 4c5.221 0 6-2.819 6-4.5c0-.146-.009-.317-.028-.5h-2.006c.032.2.034.376.034.5c0 .684 0 2.5-4 2.5z"/></svg>`,
            "superscript-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Superscript</title><path d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6L16 7.41M21.85 9h-4.88V8l.89-.82c.76-.64 1.32-1.18 1.7-1.63c.37-.44.56-.85.57-1.23a.884.884 0 0 0-.27-.7c-.18-.19-.47-.28-.86-.29c-.31.01-.58.07-.84.17l-.66.39l-.45-1.17c.27-.22.59-.39.98-.53S18.85 2 19.32 2c.78 0 1.38.2 1.78.61c.4.39.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.48-.76.93-1.27 1.36l-.64.52v.02h2.58V9z"/></svg>`,
            "subscript-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Subscript</title><path d="M16 7.41L11.41 12L16 16.59L14.59 18L10 13.41L5.41 18L4 16.59L8.59 12L4 7.41L5.41 6L10 10.59L14.59 6L16 7.41m5.85 13.62h-4.88v-1l.89-.8c.76-.65 1.32-1.19 1.7-1.63c.37-.44.56-.85.57-1.24a.898.898 0 0 0-.27-.7c-.18-.16-.47-.28-.86-.28c-.31 0-.58.06-.84.18l-.66.38l-.45-1.17c.27-.21.59-.39.98-.53s.82-.24 1.29-.24c.78.04 1.38.25 1.78.66c.4.41.62.93.62 1.57c-.01.56-.19 1.08-.54 1.55c-.34.47-.76.92-1.27 1.36l-.64.52v.02h2.58v1.35z"/></svg>`,
            "inlinecode-glyph": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><title>Inline Code</title><path d="M14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4z"/></svg>`,
        };
        const generateMenu = () => {
            let cMenuModalBar = createEl("div");
            cMenuModalBar.setAttribute("id", "cMenuModalBar");
            document.body.appendChild(cMenuModalBar);
            Object.keys(commandsMap).forEach((type) => {
                // Create menu based on `${type}-glyph`
                const typeSection = createEl("div");
                const typeIcon = createEl("span");
                typeIcon.innerHTML = iconsMap[`${type}-glyph`];
                typeSection.appendChild(typeIcon);
                cMenuModalBar.appendChild(typeSection);
                typeSection.addEventListener("click", () => {
                    var activeLeaf = app.workspace.activeLeaf;
                    if ((activeLeaf === null || activeLeaf === void 0 ? void 0 : activeLeaf.view) instanceof obsidian.MarkdownView) {
                        const view = activeLeaf.view;
                        const editor = view.editor;
                        const selection = editor.getSelection();
                        if (selection) {
                            editor.replaceSelection(commandsMap[type](selection));
                        }
                        else {
                            return;
                        }
                    }
                    else {
                        return;
                    }
                });
            });
        };
        if (app.workspace.getActiveViewOfType(obsidian.MarkdownView)) {
            let cMenuModalBar = document.getElementById("cMenuModalBar");
            if (cMenuModalBar) {
                return;
            }
            else {
                generateMenu();
            }
        }
        else {
            selfDestruct();
        }
    }
    createMenu();
}
class cMenuPlugin extends obsidian.Plugin {
    constructor() {
        super(...arguments);
        this.handlecMenu = () => {
            cMenuPopover(this.app);
        };
    }
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("cMenu v" + this.manifest.version + " loaded");
            yield this.loadSettings();
            this.addSettingTab(new cMenuSettingTab(this.app, this));
            this.registerEvent(this.app.workspace.on("active-leaf-change", this.handlecMenu));
        });
    }
    onunload() {
        selfDestruct();
        console.log("cMenu unloaded");
        this.app.workspace.off("active-leaf-change", this.handlecMenu);
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
}
class cMenuSettingTab extends obsidian.PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }
    display() {
        const { containerEl } = this;
        containerEl.empty();
        containerEl.createEl("h2", { text: "cMenu Settings" });
        new obsidian.Setting(containerEl)
            .setName("cMenu Positioning")
            .setDesc("Coming soon...");
        const div = containerEl.createEl("div", {
            cls: "cDonationSection",
        });
        const credit = createEl("p");
        const donateText = createEl("p");
        donateText.appendText("If you like this Plugin and are considering donating to support continued development, use the button below!");
        credit.appendText("Created with ❤️ by Chetachi");
        credit.setAttribute("style", "color: var(--text-muted)");
        div.appendChild(donateText);
        div.appendChild(credit);
        div.appendChild(createDonateButton("https://www.buymeacoffee.com/chetachi"));
    }
    save() {
        this.plugin.saveSettings();
    }
}
const createDonateButton = (link) => {
    const a = createEl("a");
    a.setAttribute("href", link);
    a.addClass("buymeacoffee-chetachi-img");
    a.innerHTML = `<img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=chetachi&button_colour=e3e7ef&font_colour=262626&font_family=Inter&outline_colour=262626&coffee_colour=ff0000" height="36px">`;
    return a;
};

module.exports = cMenuPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm1haW4udHMiXSwic291cmNlc0NvbnRlbnQiOm51bGwsIm5hbWVzIjpbIk1hcmtkb3duVmlldyIsIlBsdWdpbiIsIlBsdWdpblNldHRpbmdUYWIiLCJTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdURBO0FBQ08sU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFO0FBQzdELElBQUksU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxLQUFLLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ2hILElBQUksT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQy9ELFFBQVEsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUNuRyxRQUFRLFNBQVMsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFB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