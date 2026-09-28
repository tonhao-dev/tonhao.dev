# tonhao.dev

Portfólio pessoal de **Luís Antônio (Tonhão Dev)** — desenvolvedor frontend, especialista em **React**, apaixonado por qualidade de software e testes automatizados.

🔗 **Online:** [tonhao.dev](https://tonhao.dev)

## Sobre

Site estático de página única (single page) que apresenta perfil, principais competências, experiências profissionais, projetos e formação. Sem build step nem gerenciador de pacotes — HTML, CSS e JavaScript puro.

## Stack

- **HTML5** — `index.html`
- **CSS** — estilos responsivos separados em `desktop.css` e `mobile.css`
- **JavaScript** — `main.js` (copiar e-mail para a área de transferência)
- **Font Awesome** (via CDN) — ícones de redes sociais

## Estrutura do projeto

```
.
├── index.html                # Página principal
├── desktop.css               # Estilos para desktop
├── mobile.css                # Estilos responsivos (mobile)
├── main.js                   # Script (copiar e-mail)
├── icon.png                  # Favicon
├── public/                   # Imagens (avatar e banners de projetos)
│   ├── avatar.jpg
│   ├── algorithms-school.webp
│   ├── previna.webp
│   └── ifac.webp
├── netlify.toml              # Configuração de deploy e redirects (Netlify)
├── sitemap.xml               # Sitemap para SEO
├── robots.txt                # Regras para crawlers
└── google*.html              # Arquivos de verificação do Google Search Console
```

## Executando localmente

Como é um site estático, basta abrir o `index.html` no navegador. Para servir via HTTP local:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Depois acesse [http://127.0.0.1:8000](http://127.0.0.1:8000).

## Deploy

Hospedado na **Netlify**, com deploy contínuo a partir da branch `main`. Redirecionamentos e configurações de deploy ficam em `netlify.toml`.

## Analytics & monitoramento

O site integra:

- **Google Analytics** (gtag.js)
- **Microsoft Clarity**
- **Sentry** — monitoramento de erros

## Contato

- **GitHub:** [@tonhao-dev](https://github.com/tonhao-dev)
- **LinkedIn:** [tonhao-dev](https://www.linkedin.com/in/tonhao-dev/)
- **Instagram:** [@tonhao.dev](https://www.instagram.com/tonhao.dev/)
- **E-mail:** luis.developer.ac@gmail.com

---

© 2023 — Feito por Tonhão Dev
