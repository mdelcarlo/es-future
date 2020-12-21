function sanitize(strings, ...values) {
    const dirty = strings.reduce(
      (prev, next, i) => `${prev}${next}${values[i]} || ''}`
    );
  }
  const title = "ES6 course";
  const description = sanitize`Template from backend <img src="http://pinterest.com?dog" onload="function maliciousJS(){}();" />`;
  
  const html = `<h3>${title}</h3> ${description}`;
  
  const main = document.querySelector(".main");
  main.innerHTML = html;