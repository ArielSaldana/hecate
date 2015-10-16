# hecate
Full page Scroll implementation

#Features
*keyboard navigation
*mouse wheel
*pagination bullet nav

#Compatability
*css3
*no support for IE 8/9

#html

```html
 <div id="mask">
        <nav>
            <ul>
                <li data-section="0"></li>
                <li data-section="1"></li>
                <li data-section="2"></li>
                <li data-section="3"></li>
            </ul>
        <div id="container">
            <section>
                Section 1
            </section>
            <section>
                Section 2
            </section>
            <section>
                Section 3
            </section>
            <section>
                Section 4
            </section>
        </div>
    </div>
    <script src="scripts/hecate.min.js"></script>
```

#functions

`addEvent('.arrowdown', 1);`
`addEvent('#arrowdown', 0);`
