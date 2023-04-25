# 02 - image caresol

### Image -caresol

- it solid have leaft, right buttoms to click
- option to config timer to change automatically.
- show the ... with active

### logic for selected index highlight

- set a state variable to track ` [selected, setSelected] = useState("")`

- onClick of span- pass the index

- inside function- set the index value to ` selected`

- condtional apply class by checking ``` className = {selected===i ? "highlight-class" :"normal"}

ex-``` if user clicks on 4th index - we are passing index value to fn

inside function we are setting selected state variable with index

and- styling- if clicked index === selected index ? "" : ""

```

```

### Todo -

[] proper styking
[] autoincrement based on timing passed
