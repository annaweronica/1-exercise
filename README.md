# Zadanie #1
Please display a mneu of 100 dishes for a restuarant:

Each line should consist of:
- index number starting form  1
- name taken from file salads.json
- price which has to be added accordingly to the pattern (if the dish fits to both then you take the first criterium):  
    1. 15zl every third dish
    2. 10zl dish beginns with letter "E", "R" lub "G"
    3. 20zl dish which does not fit to any above
- checkbox.

The price sum must be displayed under the list. Suggested layout:

![Suggested View](./suggested_view.png)

fetch("./salads.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    }) 