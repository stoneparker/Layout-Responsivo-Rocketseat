# Responsividade 

## CSS Units
Unidades de medida do CSS

Layout Fixo
`px` - Pixels

Layout Fluído
`%` - Porcentagem
`auto` - Automática
`vh` - Viewport Height
`vw`- Wiewport Width

Textos Fixos
`1px` = 0.75pt
`16px` = 12pt

Textos Fluídos
`em` - multiplicado pelo pai
`rem` - multiplicado pelo root (body, html)

## CSS Media Queries

```css
@media (max-width: 320px) {
  #form h3 {
    font-size: 2rem;
  }
}
```

## HTML Media Attributes

## Images
- Aplicar width: 100% para imagem se adaptar na box (precisa de altura, que pode ser dada através de um padding-top) 

`<picture>`
JPG, PNG vs SVG