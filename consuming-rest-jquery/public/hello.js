$(document).ready(function() {

});
function getMealIngredients(){
    var mealname = $('#mealname').val();
    $.ajax({
        url: "http://meal-recipe-vanhanguyen.us-east-2.elasticbeanstalk.com/api/v1/meal/" + mealname
    }).then(function(data) {
        console.log(data);
        $('#ingredients').empty();
        var tableHTML = `<table>
                          <caption>Ingredients of ${mealname}</caption>
                          <tr>
                            <th>ID</th>
                            <th>Name</th> 
                            <th>Value</th>
                          </tr>`;
        $.each(data.ingredients, function(idx, obj) {
            let rowHTML = `<tr>
                            <td>${obj.id}</td>
                            <td>${obj.name}</td> 
                            <td>${obj.value}</td>
                          </tr>`;
            tableHTML += rowHTML;

            console.log(obj.name);
        });
        tableHTML += `</table>`;
        $('#ingredients').append(tableHTML);
        var sum = data.overallNutrionalValue;
        console.log(sum);
        let sumHTML = `<div>Overal Nutritional Value is ${sum}</div>`;
        $('#ingredients').append(sumHTML);

    });
}
