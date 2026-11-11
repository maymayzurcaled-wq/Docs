document.getElementById('inspect-btn').addEventListener('click', () => {
    const container = document.getElementById('target-container');
    const output = document.getElementById('inspector-output');

    let totalNodes = container.childNodes.length;
    let totalElements = container.children.length;

    let htmlReport = `<strong>Node Summary:</strong><br>`;
    htmlReport += `Total Child Nodes: ${totalNodes}<br>`;
    htmlReport += `Total Element Nodes: ${totalElements}<hr>`;
    htmlReport += `<strong>Child Nodes Details:</strong><br>`;

    container.childNodes.forEach((node, index) => {
        let typeName = "";
        switch (node.nodeType) {
            case 1:
                typeName = "ELEMENT_NODE";
                break;
            case 2:
                typeName = "ATTRIBUTE_NODE";
                break;
            case 3:
                typeName = "TEXT_NODE";
                break;
            case 8:
                typeName = "COMMENT_NODE";
                break;
            case 9:
                typeName = "DOCUMENT TYPE NODE";
                break;    
            case 10:
                typeName = "DOCUMENT_FRAGMENT_NODE";
                break;
            default:
                typeName = "OTHER_NODE";    
        }
        htmlReport += `<div class="node-item">Node ${index + 1}: <code>${node.nodeName}</code> | Type: <code>${typeName}</code></div>`;
    });
    output.innerHTML = htmlReport;
});
console.log("Character Set:", document.characterSet);
console.log("Domain:", document.domain);
console.log("Content Type:", document.contentType);

function countNodeTypes(element) {
    const counts = { elementNodes: 0, textNodes: 0, otherNodes: 0 };
    element.childNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
            counts.elementNodes++;
        } else if (node.nodeType === Node.TEXT_NODE) {
            counts.textNodes++;
        } else {
            counts.otherNodes++;
        }
    });
    return counts;
}
function inspectElement(element) {
    console.log("Tag Name:", element.tagName);
    console.log("Total Child Nodes (includes text/whitespace):",
    element.childNodes.length);
    console.log("Total Child Elements (tags only):",
    element.children.length);
}
// Selecting single element by ID
const mainHeading = document.getElementById('main-title');
console.log("Heading text:", mainHeading.textContent);
// Selecting multiple elements by class name
const featureCards = document.getElementsByClassName('feature-card');
console.log(`Found ${featureCards.length} feature cards.`);
// Select first paragraph inside the main article container
const firstParagraph = document.querySelector('article.main-content > p');
// Select all active list items inside navigation
const activeNavLinks = document.querySelectorAll('nav.navbar li.active a');
activeNavList = Array.from(activeNavLinks); // Convert NodeList to Array
// Live collection via getElementsByTagName
const liveList = document.getElementsByTagName('li');
// Static collection via querySelectorAll
const staticList = document.querySelectorAll('li');
console.log(`Initial Live Count: ${liveList.length}, Static Count: ${staticList.length}`);
// Dynamically insert a new item
const newLi = document.createElement('li');
document.querySelector('ul').appendChild(newLi);
console.log(`After Insert - Live Count: ${liveList.length}, StaticCount: ${staticList.length}`);
// Output: Live count increases by 1; Static count remains unchanged.
