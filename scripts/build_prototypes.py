from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
css = (ROOT / 'shared/prototype.css').read_text(encoding='utf-8')
js = (ROOT / 'shared/prototype.js').read_text(encoding='utf-8')
for option in 'abc':
    page = f'''<!doctype html>
<html lang="vi"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>VLearn · Phương án {option.upper()}</title><style>{css}</style></head>
<body data-option="{option}"><div id="app"></div><script>{js}</script></body></html>'''
    (ROOT / f'options/option-{option}.html').write_text(page, encoding='utf-8')
print('Built 3 standalone HTML files: options/option-a.html, option-b.html, option-c.html')
