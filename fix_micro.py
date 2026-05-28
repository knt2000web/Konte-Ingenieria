import os
import re

def fix_konte_landing():
    # 1. Fix Footer
    footer_path = r"C:\Users\cagch\Desktop\konte-ingenieria\components\Footer.tsx"
    with open(footer_path, 'r', encoding='utf-8') as f:
        footer_content = f.read()

    # Change <button onClick=...> to <a href="#" onClick=...>
    footer_content = footer_content.replace(
        '<button onClick={(e) => { e.preventDefault(); window.alert(',
        '<a href="#" onClick={(e) => { e.preventDefault(); window.alert('
    )
    footer_content = footer_content.replace(
        '<button onClick={() => window.alert(',
        '<a href="#" onClick={(e) => { e.preventDefault(); window.alert('
    )
    footer_content = footer_content.replace(
        '</button>',
        '</a>'
    )
    with open(footer_path, 'w', encoding='utf-8') as f:
        f.write(footer_content)
        
    # 2. Fix ServiceStructoPro
    sp_path = r"C:\Users\cagch\Desktop\konte-ingenieria\pages\ServiceStructoPro.tsx"
    with open(sp_path, 'r', encoding='utf-8') as f:
        sp_content = f.read()
        
    # Replace "usuarios fundadores"
    sp_content = sp_content.replace('tarifa de lanzamiento para usuarios fundadores', 'tarifa preferencial de lanzamiento')
    sp_content = sp_content.replace('usuarios fundadores', 'tarifa preferencial de lanzamiento')

    # Add the missing ACI versions so the list has exactly 14 items
    # Currently we have ACI 318 (which is 25), we add 19 and 14.
    if "{ flag: 'us', label: ' ACI 318-19 ', highlight: false }" not in sp_content:
        sp_content = sp_content.replace(
            "{ flag: 'us', label: ' ACI 318 ', highlight: true },",
            "{ flag: 'us', label: ' ACI 318-25 ', highlight: true },\n              { flag: 'us', label: ' ACI 318-19 ', highlight: false },\n              { flag: 'us', label: ' ACI 318-14 ', highlight: false },"
        )
    
    with open(sp_path, 'w', encoding='utf-8') as f:
        f.write(sp_content)
        
    print("Fixed all micro adjustments!")

if __name__ == '__main__':
    fix_konte_landing()
