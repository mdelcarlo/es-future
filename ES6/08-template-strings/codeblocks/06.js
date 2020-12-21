const title = "ES6 course";
const description = `Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;

const html = `
    <h3>${title}</h3>
    ${description}
`;

constmain = document.querySelector("main");
main.innerHTML = html;