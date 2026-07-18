import sys

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()
html = html.replace('<img id="page8-img" class="hidden" src="page8.png?v=27" style="width: 100%; height: auto; display: block;" alt="Page 8">', '<img id="page8-img" class="hidden" src="page8.png?v=30" style="width: 100%; height: auto; display: block;" alt="Page 8">\n                <img id="page12-img" class="hidden" src="page12.png?v=30" style="width: 100%; height: auto; display: block;" alt="Page 12">\n                <img id="page13-img" class="hidden" src="page13.png?v=30" style="width: 100%; height: auto; display: block;" alt="Page 13">')
html = html.replace('v=27', 'v=30')
with open('index.html', 'w', encoding='utf-8', newline='\n') as f:
    f.write(html)

with open('app.js', 'r', encoding='utf-8') as f:
    app = f.read()
app = app.replace("['page1-img', 'page2-img', 'page4-img', 'page8-img']", "['page1-img', 'page2-img', 'page4-img', 'page8-img', 'page12-img', 'page13-img']")
app = app.replace("if (num === 1 || num === 2 || num === 4 || num === 8)", "if (num === 1 || num === 2 || num === 4 || num === 8 || num === 12 || num === 13)")
with open('app.js', 'w', encoding='utf-8', newline='\n') as f:
    f.write(app)
