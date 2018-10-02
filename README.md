# cal
Simple printable calendar

# Usage
Parameters 
- `start` - Calendar starting date. Default: Now (`new Date()`)
- `n` - Number of biweeks to show. Default: 20 (2 quints)

Example:  
```...cal ? start=2018-12-31 & n=10```   

`start` always backtracks on last monday for design consistency.

Demo: https://georgegach.github.io/cal?start=2018-12-31&n=10

![Screenshot](https://georgegach.github.io/cal/screenshot.png)


# To-Do
- [x] Finish design
- [ ] Fix page-break css property
